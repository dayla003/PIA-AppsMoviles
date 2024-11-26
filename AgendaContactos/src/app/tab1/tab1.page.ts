import { Component } from '@angular/core';
import { IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonGrid, IonRow, IonCol, IonIcon, IonButtons, IonCard, IonSpinner, IonHeader} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { ContactoI } from '../models/contacto.model';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons'
import { IonButton } from '@ionic/angular/standalone';
import { EditContactoModalComponent } from '../edit-contacto-modal/edit-contacto-modal.component';
import { ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCard, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonLabel, IonItem, FormsModule, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonButtons, CommonModule, IonSpinner, IonHeader],
})
export class Tab1Page {
  contactos: ContactoI[] = [];
  nuevoContacto: ContactoI;
  cargando: boolean = false;
  contacto: ContactoI;
 
  constructor(
    private router: Router,
    private modalController: ModalController,
    private firestoreService: FirestoreService) {
      this.cargarContactos();
      this.inicializarContacto();
      addIcons({ create: icons['create']});
      addIcons({ trash: icons['trash']});
    }

    inicializarContacto() {
      this.nuevoContacto = {
        nombre: null,
        telefono: null,
        correo: null,
        direccion: null,
        id: this.firestoreService.generarId(),
      }
    }

    cargarContactos(){
      this.firestoreService.obtenerCambiosContactos<ContactoI>('contactos').subscribe( data => {
        if(data){
          this.contactos = data
        }
      })
    }

    async editar(contacto: ContactoI) {
      console.log('edit -> ', contacto);
      // Enviar el contacto completo al modal
      const modal = await this.modalController.create({
        component: EditContactoModalComponent,
        componentProps: {
          contacto: contacto // Asegurándote de enviar el contacto con el ID
        }
      });
      // Mostrar el modal
      await modal.present();
    }
   
  async borrar(contacto: ContactoI) {
      this.cargando = true;
      await this.firestoreService.borrarDocumentoId('contactos', contacto.id);
      this.cargando = false;
    }
   
}
