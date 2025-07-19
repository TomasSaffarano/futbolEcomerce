import { Component } from '@angular/core';
import { PrendasCarritoService } from '../prendas-carrito.service';
import { Prenda } from '../prendas-listado/Prenda';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-onlyfutbol-compra',
  templateUrl: './onlyfutbol-compra.component.html',
  styleUrl: './onlyfutbol-compra.component.scss'
})
export class OnlyfutbolCompraComponent {
  
  producto : Observable <Prenda[]>;
  compraRealizada : boolean = false;
  
  constructor(private carrito: PrendasCarritoService){
    this.producto = carrito.listaCarrito.asObservable();
  }
  
  total(prenda:Prenda){
    return this.carrito.total(prenda);
  } 
  
  realizarCompra() {
    this.compraRealizada = true;
    return this.compraRealizada;

  }

}
