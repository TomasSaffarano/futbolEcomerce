import { Component, EventEmitter, Output } from '@angular/core';
import { PrendasCarritoService } from '../prendas-carrito.service';
import { Prenda } from '../prendas-listado/Prenda';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  
  listaCarrito$ :Observable <Prenda[]>;
  constructor(private carrito: PrendasCarritoService){
    this.listaCarrito$ = carrito.listaCarrito.asObservable();
  }
  

total(prenda:Prenda){
  return prenda.cantidad * prenda.precio;
} 
  
quitarDelCarrito(prendas:Prenda) : void{
  this.carrito.quitarDelCarrito(prendas);
}
 
}
