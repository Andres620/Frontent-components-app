import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralRoutingModule } from './general/general-routing.module';
import { GeneralModule } from './general/general.module';
import { HomeComponent } from './general/home/home.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GeneralRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
