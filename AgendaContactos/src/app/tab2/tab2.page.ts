import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonSpinner } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { ContactoI } from '../models/contacto.model';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonSpinner, FormsModule]
})
export class Tab2Page {

  contactos: ContactoI[] = [];
  nuevoContacto: ContactoI;
  cargando: boolean = false;
  contacto: ContactoI
 
  constructor(
    private router: Router,
    private firestoreService: FirestoreService) {
      this.inicializarContacto();
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
 
  async guardarContacto() {
    this.cargando = true;
    await this.firestoreService.crearReferenciaId(this.nuevoContacto, 'contactos', this.nuevoContacto.id)
    this.cargando = false;
    this.inicializarContacto();
  }
  
}
