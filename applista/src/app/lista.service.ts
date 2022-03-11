import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  list =[]
  // Link API Lambda
  APIURL = 'https://k3i35fonbg.execute-api.us-east-1.amazonaws.com/dev/lista'

  constructor(private http: HttpClient) { }
  // Get de la lista
  fetchLista() {
     this.http.get<any[]>(this.APIURL)
       .subscribe((lista) => {
         this.list = lista;
       })
  }
  // Post del articulo nuevo
  addArticulo(articulo) {
    const nuevoAtriculo = {name: articulo, isChecked: false }
    this.http.post(this.APIURL, nuevoAtriculo).subscribe((articulo)=>{
      this.list = [ ...this.list, articulo]
      console.log(this.list)
    })
  }
  // Guardar la lista
  getLista(){
    return this.list.slice();
  }
  // Put para editar isChecked con id
  marcarArticulo(id){
    this.http.put(this.APIURL + "/" + id, {}).subscribe()
  }
  // Delete de articulo con id
  deleteArticulo(id){
    this.http.delete(this.APIURL + "/" + id, {}).subscribe()
  }
  // Borra item de lista en html
  borrar(item){
    return this.list.splice(this.list.indexOf(item),1);
  }


}
