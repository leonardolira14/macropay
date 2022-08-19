import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardproductModule } from '../../../shared/components/cardproduct/cardproduct.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardproductModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
