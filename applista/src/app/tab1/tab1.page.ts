import { Component, OnInit } from '@angular/core';
import { IonItem } from '@ionic/angular';
import { ListaService } from '../lista.service'; // Importar Lista Service

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  constructor(private listaService: ListaService) {}

  // Obtner la lista
  get list() {
    return this.listaService.getLista();
  }
  articulo: string = "";
  
  // Agrgar articulo
  addArticulo() {
    console.log(this.listaService)
    this.listaService.addArticulo(this.articulo);
    console.log(this.listaService)
  }

  // Marcar articulo como marcado
  marcarArticulo(id){
    console.log("id: " + id)
    this.listaService.marcarArticulo(id);
  }

}
