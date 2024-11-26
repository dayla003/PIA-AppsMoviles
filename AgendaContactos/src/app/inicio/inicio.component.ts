import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonContent, IonButtons, IonIcon, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  imports: [CommonModule ,IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonButtons, IonIcon, IonCard],
  standalone: true,
  styleUrls: ['./inicio.component.scss'],
 
})
export class InicioComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  
  irLogin() {
    this.router.navigate(['/login']);
  } 
  
  irRegistro() {
    this.router.navigate(['/register']);
  }

}
