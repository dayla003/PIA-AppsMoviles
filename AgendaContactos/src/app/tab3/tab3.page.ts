import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CamaraComponent } from '../camara/camara.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, CamaraComponent, IonCard],
})
export class Tab3Page {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  cerrarSesion() {
    this.authService.cerrarSesion().then(() => {
      this.router.navigate(['/inicio']);
    }).catch(error => {
      console.error('Error al cerrar sesión: ', error);
    });
  }
}
