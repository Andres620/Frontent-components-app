import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralRoutingModule } from './general/general-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductRoutingModule,
    GeneralRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
