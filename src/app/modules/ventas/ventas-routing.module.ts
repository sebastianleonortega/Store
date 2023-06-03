import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InformationComponent } from './pages/information/information/information.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'info/:id',
    component: InformationComponent
  }
]

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
