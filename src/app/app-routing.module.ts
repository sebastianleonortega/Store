import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'app',
    component: MainComponent,
    children: [


      {
        path: 'user',
        loadChildren: () =>
        import('@modules/user/user.module').then( (m)  => m.UserModule)
      },
      {
        path: 'carrusel',
        loadChildren: ()=>
        import ('@modules/carrusel/carrusel.module').then ( (m)=> m.CarruselModule)
      },
      {
        path: '**',
        redirectTo: 'panel/product',
        pathMatch: 'full'
      },
    ]
},
{
  path: '**',
  redirectTo: 'panel/product',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
