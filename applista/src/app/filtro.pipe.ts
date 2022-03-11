import { Pipe, PipeTransform } from '@angular/core';
// Pipe para filtrar con el buscador
@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], texto: string): any[] {
    if (texto === '') {
      return value;
    }
    return value.filter(item =>{
      return item.name.toLowerCase().includes(texto.toLocaleLowerCase());});
  }

}
