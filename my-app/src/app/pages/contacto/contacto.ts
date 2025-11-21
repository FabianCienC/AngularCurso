import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ContactMessage as IContactMessage } from '../../shared/data-types/contact-message';


@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})

export class Contacto {
  formData = {
    nombre: "",
    correo: "",
    mensaje: ""
  }
  
  isError: boolean = false;
  isSuccess: boolean = false;
  isLoading: boolean = false;

  constructor(
    private httpClient: HttpClient, 
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  submitHandler() {
    const data: IContactMessage = {
      name: this.formData.nombre,
      message: `${this.formData.nombre} con correo ${this.formData.correo} te mando este mensaje:
        ${this.formData.mensaje}
      `
    }
    
    setTimeout(() => {
      this.router.navigateByUrl("/")
    }, 1000)

    return;
    this.isLoading = true;
    this.httpClient.post("https://formsubmiaaat.co/ajax/fabiancienfuegos1812@gmail.com", data).subscribe({
      next: (response) => {
        console.log("Sucess: ", response);
        this.formData.nombre = "";
        this.formData.correo = "";
        this.formData.mensaje = "";
        this.changeDetectorRef.detectChanges()
        this.isError = false;
        this.isSuccess = true;
        this.isLoading = false;


      },
      error: (err) => {
        console.error("Error: ", err)
        this.isError = true;
        this.isLoading = false;
      }
    })
  }
}
