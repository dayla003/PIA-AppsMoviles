import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonButtons, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonContent, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule ,FormsModule ,IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonContent, IonItem, IonLabel, IonInput], // Agregamos IonInput aquí
  standalone: true,
})
export class LoginPage {
  email: string = '';
  password: string = '';
 
  constructor(private router: Router, private authService: AuthService) {}
 
  // Método de inicio de sesión
  onLogin() {
    this.authService.login(this.email, this.password).then(() => {
      this.router.navigate(['/tabs/tab1']); // Redirige a la página principal después del inicio de sesión exitoso
    }).catch(error => {
      console.log(error);
      // Aquí puedes agregar un mensaje de error si la autenticación falla
    });
  }
 
  // Método para redirigir a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}