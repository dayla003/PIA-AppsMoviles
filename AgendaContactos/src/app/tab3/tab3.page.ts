import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AuthService } from '../services/auth.service';  // Asegúrate de que el path sea correcto
import { Router } from '@angular/router';
import { CamaraComponent } from '../camara/camara.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, CamaraComponent],
})
export class Tab3Page {
  // Inyectar AuthService y Router en el constructor
  constructor(
    private authService: AuthService,  // Inyecta el servicio de autenticación
    private router: Router             // Inyecta el servicio de Router para redirigir después de cerrar sesión
  ) {}

  // Método para cerrar sesión
  cerrarSesion() {
    this.authService.cerrarSesion().then(() => {
      // Después de cerrar sesión, redirige al login o a la pantalla inicial
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Error al cerrar sesión: ', error);
    });
  }
}
