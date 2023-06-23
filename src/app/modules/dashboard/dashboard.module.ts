import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@modules/dashboard/pages/dashboard/dashboard.component';
import {SharedModule} from "@shared/shared.module";
import {DashboardRoutingModule} from "@modules/dashboard/dashboard-routing.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
