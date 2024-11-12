import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonContent, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  imports: [CommonModule ,IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonButtons],
  standalone: true,
  styleUrls: ['./inicio.component.scss'],
 
})
export class InicioComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  
  // Redirige a la página de inicio de sesión
  goToLogin() {
    this.router.navigate(['/login']);
  } 
  // Redirige a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }

}
