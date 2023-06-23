import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryComponent} from "@modules/category/pages/category/category.component";

const routes: Routes= [
  {
    path: '',
    component: CategoryComponent
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CategoryRoutingModule { }
