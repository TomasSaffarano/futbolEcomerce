import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  constructor ( ){}

  @Input() cantidad!: number;
  @Input() maxCant!: number;

  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() cantMaxStock: EventEmitter<string> = new EventEmitter<string>();



  sumarCant() : void {
      if(this.cantidad < this.maxCant){//Se controla que se pueda comprar siempre y cuando haya prendas.
          this.cantidad++;
          this.cantidadChange.emit(this.cantidad);
      }else{
        this.cantMaxStock.emit("No hay mas prendas en stock!");
      }
  }
  restarCant() : void {
      if(this.cantidad>0){//Se controla que no haya valor negativo 
        this.cantidad--;
        this.cantidadChange.emit(this.cantidad);
      } 
  }

 
}
