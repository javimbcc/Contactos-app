import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ContactosService } from "../../services/contactos.service";

@Component({
  selector: "app-crear-contacto",
  templateUrl: "./crear-contacto.component.html",
  styleUrls: ["./crear-contacto.component.css"],
})
export class CrearContactoComponent implements OnInit {
  profileForm = this.fb.group({
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    avatar: new FormControl("", Validators.required),
  });

  constructor(private fb: FormBuilder, private cService: ContactosService) {}

  ngOnInit(): void {}

  submit(): void {
    this.cService.postContacto(this.profileForm.value).subscribe((resp) => {
      console.log(resp);
    });
  }
}
