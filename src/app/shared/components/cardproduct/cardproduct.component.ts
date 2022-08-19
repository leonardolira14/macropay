import { Component, Input, OnInit } from '@angular/core';
import { ProductosDTO } from '../../../core/models/productos/productosDTO';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cardproduct',
  templateUrl: './cardproduct.component.html',
  styleUrls: ['./cardproduct.component.scss']
})
export class CardproductComponent implements OnInit {
@Input() marca:string = "";
@Input() modelo:string = "";
@Input() precio:string = '';
@Input() imagen:string = '';
@Input() stock: boolean = false;

cantProducto = 1;
carShopList: any = [];
showDetail=false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('CarShop')){
      this.carShopList = JSON.parse(localStorage.getItem('CarShop')!);
    }
  }

  add(){
    this.cantProducto++;
  }
  min(){
    if(this.cantProducto<=1){
      this.cantProducto = 1;
    }else{
      this.cantProducto--;
    }
  }
  addCard(){
    const addCar = {
      Marca:this.marca,
      Model:this.modelo,
      Precio:this.precio,
      Imagen:this.imagen,
      Stock:this.stock,
      Cantidad:this.cantProducto

    }
    if(this.carShopList === undefined || this.carShopList.length === 0){
     this.carShopList.push(addCar)
    }else{
      if(this.carShopList.find((item:ProductosDTO)=>addCar.Model===item.Model)){
        this.carShopList[this.carShopList.findIndex((item:ProductosDTO)=>addCar.Marca===item.Marca)] = addCar;
      }else{
        this.carShopList.push(addCar)
      }
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto Agregado',
      showConfirmButton: false,
      timer: 1500
    })
    localStorage.setItem('CarShop',JSON.parse(this.carShopList));
  }
}
