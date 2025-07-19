import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyfutbolPrendasComponent } from './onlyfutbol-prendas/onlyfutbol-prendas.component';
import { OnlyfutbolAboutComponent } from './onlyfutbol-about/onlyfutbol-about.component';
import { OnlyfutbolCompraComponent } from './onlyfutbol-compra/onlyfutbol-compra.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: OnlyfutbolPrendasComponent,
  },
  {
    path: 'about',
    component: OnlyfutbolAboutComponent,
  },
  {
    path: 'comprar',
    component: OnlyfutbolCompraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
