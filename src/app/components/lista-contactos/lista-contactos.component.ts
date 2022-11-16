import { Component, OnInit } from "@angular/core";
import { contactos } from "../../interfaces/contacto";
import { ContactosService } from "../../services/contactos.service";

@Component({
  selector: "app-lista-contactos",
  templateUrl: "./lista-contactos.component.html",
  styleUrls: ["./lista-contactos.component.css"],
})
export class ListaContactosComponent implements OnInit {
  constructor(private cService: ContactosService) {}

  listaContactos: any[] = [];

  getContactos() {
    this.cService.getContactos().subscribe((resp) => {
      console.log(resp);
      resp.data.forEach((element: contactos) => {
        this.listaContactos.push(element);
      });
    });
  }


  ngOnInit(): void {
    this.getContactos();
  }
}
