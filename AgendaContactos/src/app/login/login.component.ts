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
      this.router.navigate(['/tabs/tab1']);
    }).catch(error => {
      console.log(error);
    });
  }
  // Método para redirigir a la página de registro
  irRegistro() {
    this.router.navigate(['/register']);
  }

  irHome(){
    this.router.navigate(['/inicio']);
  }
}