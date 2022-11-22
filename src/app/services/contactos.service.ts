import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { contactos } from "../interfaces/contacto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
/*
Servicio que recoge las peticiones http de la API de reqres.in
@author Jmenabc
*/
export class ContactosService {
  constructor(private http: HttpClient) {}

  //metodo para recoger la lista de contactos de la API
  getContactos() {
    console.log("Contacto recogido sin problemas");
    return this.http.get<any>("https://reqres.in/api/users");
  }
  //metodo para recoger los detalles de contactos de la API
  getDetail(id: number) {
    console.log("Detalle del contacto recogido");
    return this.http.get<any>(`https://reqres.in/api/users/${id}`);
  }
  //metodo para crear contactos de la API
  postContacto(contact: contactos): Observable<contactos> {
    console.log("Contacto creado sin problemas");
    return this.http.post<contactos>(`https://reqres.in/api/users`, contact);
  }
  //metodo para eliminar contactos de la API
  deleteContacto(id: number): Observable<any> {
    console.log("Contacto eliminado sin problemas");
    return this.http.delete<contactos>(`https://reqres.in/api/users/${id}`);
  }
  //metodo para actualizar contactos de la API
  updateContacto(contact: contactos, id: number): Observable<contactos> {
    console.log("Contacto actualizado sin problemas");
    return this.http.put<contactos>(
      `https://reqres.in/api/users/${id}`,
      contact
    );
  }
}
