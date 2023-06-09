import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MainComponent } from './layout/main/main.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from '@modules/user/user.module';
import { VentasModule } from '@modules/ventas/ventas.module';
import { CarruselModule } from '@modules/carrusel/carrusel.module';
import { ProductComponent } from '@modules/product/pages/Product/product.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    // Modules
    AppRoutingModule,
    CoreModule,
    CommonModule,
    HttpClientModule,
    UserModule,
    VentasModule,
    CarruselModule,
    FormsModule,


  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
