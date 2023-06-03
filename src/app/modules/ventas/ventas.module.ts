import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from '@shared/shared.module';
import { VentasRoutingModule } from './ventas-routing.module';
import { InformationComponent } from './pages/information/information/information.component';



@NgModule({
  declarations: [
    InicioComponent,
    InformationComponent,
  ],
  imports: [
    SharedModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
