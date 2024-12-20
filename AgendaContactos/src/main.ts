import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"mi-agenda-6c0ef","appId":"1:599127187418:web:8ca222ae9e20c5c59daae3","storageBucket":"mi-agenda-6c0ef.firebasestorage.app","apiKey":"AIzaSyAOCjRQbHmJT5yeiKFCAKPAtwEgnVy52pE","authDomain":"mi-agenda-6c0ef.firebaseapp.com","messagingSenderId":"599127187418"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
  ],
});
defineCustomElements(window);
