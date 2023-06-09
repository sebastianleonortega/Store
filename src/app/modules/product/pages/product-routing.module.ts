import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes, ROUTES} from "@angular/router";
import {ProductComponent} from "@modules/product/pages/Product/product.component";

const routes: Routes  = [
  {
    path: '',
    component: ProductComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProductRoutingModule { }
