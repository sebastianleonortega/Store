import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from '@modules/user/user.module';
import { CarruselModule } from '@modules/carrusel/carrusel.module';
import {FormsModule} from "@angular/forms";
import {ProductModule} from "@modules/product/product.module";
import {MainComponent} from "@layout/main/main.component";
import {FooterComponent} from "@layout/footer/footer.component";
import {NavigationComponent} from "@layout/navigation/navigation.component";
import {CoreModule} from "@core/core.module";
import {SharedModule} from "@shared/shared.module";
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import {CategoryModule} from "@modules/category/category.module";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    // Modules
    UserModule,
    CarruselModule,
    ProductModule,
    SharedModule,
    CategoryModule
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
