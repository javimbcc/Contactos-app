import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { contactos } from "../../interfaces/contacto";
import { ContactosService } from "../../services/contactos.service";

@Component({
  selector: "app-detalle-contactos",
  templateUrl: "./detalle-contactos.component.html",
  styleUrls: ["./detalle-contactos.component.css"],
})
export class DetalleContactosComponent implements OnInit {
  constructor(
    private cService: ContactosService,
    private route: ActivatedRoute
  ) {}

  listaContactos?: contactos;
    //metodo para recoger los detalles de los contactos
  getContactos() {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get("id"));
      this.cService.getDetail(id).subscribe((resp: any) => {
        this.listaContactos = resp.data;
      });
    });
  }

  deleteContactos() {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get("id"));
      this.cService.deleteContacto(id).subscribe((resp: any) => {
        console.log(resp);
      });
    });
  }

  // updateContactos() {
  //   this.route.paramMap.subscribe((params) => {
  //     let id = Number(params.get("id"));
  //     this.cService.updateContacto(this.listaContactos,id).subscribe((resp: any) => {
  //       this.listaContactos = resp.data;
  //     });
  //   })
  // }

  ngOnInit(): void {
    this.getContactos();
  }
}
