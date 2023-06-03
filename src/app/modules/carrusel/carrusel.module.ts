import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {CarruselComponent} from './carrusel/carrusel.component';
import {CarruselRoutingModule} from '../carrusel/carrusel.routing.module'


@NgModule({
  declarations: [
    CarruselComponent
  ],
  imports: [
    CarruselRoutingModule,
    SharedModule
  ]
})
export class CarruselModule { }
