import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { ContactoI } from '../models/contacto.model';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonLabel, IonItem, FormsModule],
})
export class Tab1Page {
  contactos: ContactoI[] = [];
  nuevoContacto: ContactoI;
  cargando: boolean = false;
  contacto: ContactoI
 
  constructor(
    private router: Router,
    private firestoreService: FirestoreService) {
      this.cargarContactos();
    }

    cargarContactos(){
      this.firestoreService.obtenerCambiosContactos<ContactoI>('contactos').subscribe( data => {
        if(data){
          this.contactos = data
        }
      })
     
    }
}
