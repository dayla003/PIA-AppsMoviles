import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ContactoI } from '../models/contacto.model';
import { FirestoreService } from '../firestore.service';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonSpinner } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-contacto-modal',
  templateUrl: './edit-contacto-modal.component.html',
  standalone: true,
  styleUrls: ['./edit-contacto-modal.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class EditContactoModalComponent {
  @Input() contacto: ContactoI;
  cargando: boolean = false;
 
  constructor(
    private modalController: ModalController,
    private firestoreService: FirestoreService
  ) {}
 
  dismiss() {
    this.modalController.dismiss();
  }
 
  async guardarCambios() {
    this.cargando = true;
 
    try {
      const contactoConId = { ...this.contacto };
      await this.firestoreService.crearReferenciaId(contactoConId, 'contactos', contactoConId.id);
      this.modalController.dismiss();
    } catch (error) {
      console.error("Error al guardar cambios: ", error);
    } finally {
      this.cargando = false;
    }
  }
}