import { Pipe, PipeTransform } from '@angular/core';
// Pipe para fitrar los articulos comprados
@Pipe({
  name: 'checked'
})
export class CheckedPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.filter((x)=>x.isChecked);
  }

}
