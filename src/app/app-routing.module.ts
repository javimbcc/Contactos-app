import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalleContactosComponent } from "./components/detalle-contactos/detalle-contactos.component";
import { ListaContactosComponent } from "./components/lista-contactos/lista-contactos.component";

const routes: Routes = [
  { path: "Contactos", component: ListaContactosComponent },
  { path: "DetalleContactos/:id", component: DetalleContactosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
