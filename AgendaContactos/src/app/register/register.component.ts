import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonButtons, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonContent, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule ,FormsModule ,IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonContent, IonItem, IonLabel, IonInput], // Agregamos IonInput aquí
  standalone: true,
})
export class RegisterPage {
  email: string = '';
  password: string = '';
 
  constructor(private authService: AuthService, private router: Router) {}
 
  // Método para registrar al usuario
  onRegister() {
    this.authService.register(this.email, this.password)
      .then(() => {
        this.router.navigate(['/login']); // Redirigir a login después de registro exitoso
      })
      .catch((error) => {
        console.error('Error en el registro', error);
      });
  }
 
  // Redirigir a la página de login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
