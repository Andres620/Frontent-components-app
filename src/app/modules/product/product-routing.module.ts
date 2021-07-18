import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductModule } from './product.module';

const routes: Routes = [
{
  path: 'productos/lista',
  component: ProductListComponent
},
{
  path: 'product',
  pathMatch: 'full',
  redirectTo: '/productos/lista' 
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
