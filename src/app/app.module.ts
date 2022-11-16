import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { DetalleContactosComponent } from './components/detalle-contactos/detalle-contactos.component';
import { DisplayerComponent } from './components/displayer/displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    DetalleContactosComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
