import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedPipe } from '../checked.pipe';
import { FiltroPipe } from '../filtro.pipe';



@NgModule({
  declarations: [CheckedPipe, FiltroPipe],
  imports: [
    CommonModule
  ],
  exports:[CheckedPipe, FiltroPipe]
})
export class PipesModule { }
