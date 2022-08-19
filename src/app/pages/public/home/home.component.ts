import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { ProductosDTO } from 'src/app/core/models/productos/productosDTO';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  subscriptions: Subscription[] = [];
  listProductos:ProductosDTO[] = [];
  constructor(
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.getlistproduct();
  }

  getlistproduct(){
    this.subscriptions.push(
      this.productsService.getproduct().subscribe((data:any)=>{
        console.log(data);
        this.listProductos = data['data'];
      })
    )
  }

   // DESTROY
   ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe);
  }
}
