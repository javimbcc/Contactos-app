import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { contactos } from "../interfaces/contacto";

@Injectable({
  providedIn: "root",
})
export class ContactosService {
  constructor(private http: HttpClient) {}

  getContactos() {
    return this.http.get<any>("https://reqres.in/api/users");
  }

  getDetail(id: number) {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`);
  }

  postContacto() {

  }
}
