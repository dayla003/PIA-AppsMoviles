import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {v4 as uuidv4 } from 'uuid';
uuidv4();

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: Firestore = inject(Firestore);
  constructor() { }
  
  obtenerCambiosContactos<tipo>(path: string){
    const referenciaCollection = collection(this.firestore, path);
    return collectionData(referenciaCollection) as Observable<tipo[]>;
  }

  crearDocumento(data: any, enlace: string) {
    const document = doc(this.firestore, enlace);
    return setDoc(document, data);
  
  }
  
  crearReferenciaId(data: any, enlace: string, idDoc: string) {///contactos/7dnb0a7aiaj19zj0BXP0
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data);
  }
 
  generarId() {
    return uuidv4()
  }

  borrarDocumentoId(enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return deleteDoc(document);
  }

}
