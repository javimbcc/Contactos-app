import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { DetalleContactosComponent } from './components/detalle-contactos/detalle-contactos.component';
import { DisplayerComponent } from './components/displayer/displayer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    DetalleContactosComponent,
    DisplayerComponent,
    CrearContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
