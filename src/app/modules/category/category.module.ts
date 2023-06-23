import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category/category.component';
import {SharedModule} from "@shared/shared.module";
import {CategoryRoutingModule} from "@modules/category/category-routing.module";



@NgModule({
  declarations: [
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
