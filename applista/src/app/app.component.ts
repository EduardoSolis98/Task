import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private listasService: ListaService) {}

  // Obtener la lista al iniciar
  ngOnInit(): void {
    this.listasService.fetchLista();
  }
}
