import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "@modules/product/pages/Product/product.component";
import {ProductAddComponent} from "@modules/product/pages/product-add/product-add.component";

const routes: Routes =[
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'add',
    component: ProductAddComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
