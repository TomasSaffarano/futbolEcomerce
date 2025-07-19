import { Component, } from '@angular/core';
import { Prenda } from './Prenda';
import { PrendasCarritoService } from '../prendas-carrito.service';



@Component({
  selector: 'app-prendas-listado',
  templateUrl: './prendas-listado.component.html',
  styleUrl: './prendas-listado.component.scss'
})
export class PrendasListadoComponent {

constructor( private carrito: PrendasCarritoService) {}
  
  prendas : Prenda [] = [
      {
          nombre: "Boca 1998 - Titular",
          precio: 50000,
          stock: 10,
        image: "assets/img/prendas/boca.jpg",
        cantidad: 0,
    },
    {
        nombre: "Argentina 2006 - Titular",
        precio: 80000,
        stock: 5,
        image: "assets/img/prendas/arg.jpg",
        cantidad: 0,
    },
    {
        nombre: "Fiorentina 2000 - Titular",
        precio: 90000,
        stock: 10,
        image: "assets/img/prendas/fiorentina.jpg",
        cantidad: 0,
    },
    {
        nombre: "Milan 2006 - Suplente",
        precio: 65000,
        stock: 10,
        image: "assets/img/prendas/milan.jpg",
        cantidad: 0,
    },
    {
        nombre: "Boca 1997 - Titular",
        precio: 55000,
        stock: 10,
        image: "assets/img/prendas/quilmes-boca.jpg",
        cantidad: 0,
    },
    {
        nombre: "PSG 2001 - Titular",
        precio: 100000,
        stock: 10,
        image: "assets/img/prendas/psg.jpg",
        cantidad: 0,
    },
    {
        nombre: "River 96-97 - Titular",
        precio: 80000,
        stock: 6,
        image: "assets/img/prendas/river.jpg",
        cantidad: 0,
    },
    {
        nombre: "Boca 1996 - Titular",
        precio: 45000,
        stock: 10,
        image: "assets/img/prendas/boca-parmalat.jpg",
        cantidad: 0,
    },
    
] 

agregarCarrito(prendas:Prenda) : void{
    if(prendas.cantidad > 0)
        this.carrito.agregarCarrito(prendas);
    prendas.stock -= prendas.cantidad;
    prendas.cantidad = 0;
}

cantMaxStock(m:string){
    return alert(m);
}
}