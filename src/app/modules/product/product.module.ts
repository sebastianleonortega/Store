import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {SharedModule} from "@shared/shared.module";

import {ProductComponent} from "@modules/product/pages/Product/product.component";
import {ProductRoutingModule} from "@modules/product/product-routing.module";
import { ProductAddComponent } from './pages/product-add/product-add.component';




@NgModule({
  declarations: [
    ProductComponent,
    ProductAddComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
  ]
})
export class ProductModule { }
