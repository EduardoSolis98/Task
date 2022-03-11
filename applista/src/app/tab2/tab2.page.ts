import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service'; // Importar ListaService

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  searchText = '';

  constructor(private listaService: ListaService) {}

  // Obtener la lista
  get list() {
    return this.listaService.getLista();
  }

  // Funcion para borrar item del html
  borrar(item){
    this.listaService.borrar(item);
  }

  // Obtener texto ingresado en el buscador
  buscar(event){
    this.searchText = event.detail.value;
  }

  // Borrar un articulo
  deleteArticulo(id){
    this.listaService.deleteArticulo(id);
  }

}
