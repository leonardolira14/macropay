import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardproductComponent } from './cardproduct.component';
import { FormsModule } from '@angular/forms';
import { DetailsproductoModule } from '../detailsproducto/detailsproducto.module';



@NgModule({
  declarations: [
    CardproductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DetailsproductoModule
  ],
  exports:[
    CardproductComponent
  ]
})
export class CardproductModule { }
