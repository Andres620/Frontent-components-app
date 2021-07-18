import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralRoutingModule } from './modules/general/general-routing.module';
import { ProductRoutingModule } from './modules/product/product-routing.module';

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
