import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private auth: Auth;
 
  constructor() {
    // Inicializa Firebase
    const app = initializeApp(environment.firebase);
    this.auth = getAuth(app);
  }
 
  // Método para registrar un nuevo usuario
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
 
  // Método para iniciar sesión
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  cerrarSesion(): Promise<void> {
    return signOut(this.auth);
  }
}