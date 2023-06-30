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
import {MainComponent} from "@layout/main/main.component";
import {FooterComponent} from "@layout/footer/footer.component";
import {NavigationComponent} from "@layout/navigation/navigation.component";
import {CoreModule} from "@core/core.module";
import {SharedModule} from "@shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
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
    SharedModule,
    BrowserAnimationsModule,
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
