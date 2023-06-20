import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@layout/main/main.component';
import {LandingPageComponent} from "@layout/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then((m)=> m.AuthModule)
  },
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@modules/dashboard/dashboard.module').then( (m) => m.DashboardModule)
      },
      {
        path:'product',
        loadChildren: ()=> import('@modules/product/product.module').then( (m)=> m.ProductModule)
      },
      {
        path: 'category',
        loadChildren: ()=> import('@modules/category/category.module').then((m)=> m.CategoryModule)
      },
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
