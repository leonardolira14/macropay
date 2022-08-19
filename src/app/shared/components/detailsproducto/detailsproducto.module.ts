import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsproductoComponent } from './detailsproducto.component';



@NgModule({
  declarations: [
    DetailsproductoComponent
  ],
  imports: [
    CommonModule
  ],exports:[DetailsproductoComponent]
})
export class DetailsproductoModule { }
