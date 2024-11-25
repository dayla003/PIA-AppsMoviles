import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../services/foto-service.service';
import { NgFor } from '@angular/common';
import { IonCol, IonFab, IonFabButton, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  imports: [IonFab, IonFabButton, IonGrid, IonCol, IonRow, NgFor],
  standalone: true,
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {
  
  constructor(private fotoService: FotoServiceService) { }

  fotos = this.fotoService.fotos;
  ngOnInit() {}
  tomarFoto(){
    this.fotoService.addNewToGallery();
  }
}
