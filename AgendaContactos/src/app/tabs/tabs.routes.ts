import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  // Ruta principal que redirige a la página de 'inicio'
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  // Ruta de la página de inicio
  {
    path: 'inicio',
    loadComponent: () =>
      import('../inicio/inicio.component').then(m => m.InicioComponent),
  },
  // Ruta de la página de registro
  {
    path: 'register',
    loadComponent: () =>
      import('../register/register.component').then((m) => m.RegisterPage),
  },
  // Ruta de la página de login
  {
    path: 'login',
    loadComponent: () =>
      import('../login/login.component').then((m) => m.LoginPage),
  },
  // Ruta de las pestañas (Tabs) con sus rutas hijas
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
        
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: 'tab1',  // Redirige a 'tab1' como la pestaña por defecto dentro de 'tabs'
        pathMatch: 'full',
      },
    ],
  },
  // Ruta por defecto para cualquier otra URL no encontrada
  {
    path: '**',
    redirectTo: '/inicio',
  },
];