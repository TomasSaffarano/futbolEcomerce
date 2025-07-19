import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrendasListadoComponent } from './prendas-listado/prendas-listado.component';
import { FormsModule } from '@angular/forms';
import { OnlyfutbolPrendasComponent } from './onlyfutbol-prendas/onlyfutbol-prendas.component';
import { OnlyfutbolAboutComponent } from './onlyfutbol-about/onlyfutbol-about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { OnlyfutbolCompraComponent } from './onlyfutbol-compra/onlyfutbol-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    PrendasListadoComponent,
    OnlyfutbolPrendasComponent,
    OnlyfutbolAboutComponent,
    CarritoComponent,
    InputIntegerComponent,
    OnlyfutbolCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
