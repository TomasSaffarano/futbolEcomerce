import { Injectable } from '@angular/core';
import { Prenda } from './prendas-listado/Prenda';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrendasCarritoService {
  
  private _listaCarrito : Prenda[] = [];
  listaCarrito : BehaviorSubject<Prenda[]> = new BehaviorSubject (this._listaCarrito);
  
  constructor() { }

  agregarCarrito(prenda: Prenda) {
    let producto = this._listaCarrito.find((valor)=> valor.nombre == prenda.nombre); //corrobora que no se replique el item
    if(!producto){
      this._listaCarrito.push({... prenda});
    } else{
      producto.cantidad += prenda.cantidad;
    }
 
    this.listaCarrito.next(this._listaCarrito);
  }

  quitarDelCarrito(prenda: Prenda) {
    this._listaCarrito = this._listaCarrito.filter(item => item.nombre !== prenda.nombre);
    this.listaCarrito.next(this._listaCarrito);
  }

  total(prenda:Prenda){
    return prenda.cantidad * prenda.precio;
  } 


}
