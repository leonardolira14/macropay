import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosDTO } from '../models/productos/productosDTO';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }

  getproduct(){
   return this.http.get<ProductosDTO[]>("assets/json/listaequipos.json");
  }
}
