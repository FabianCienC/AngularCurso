import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Table } from './shared/components/table/table';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Table, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly nombre = signal('Francisco');

  nombres = [
    "Juan",
    "Pedro",
    "Sofia"
  ];

  nuevoNombre: string = "";

  agregarNombre (campo?: HTMLInputElement) {
    this.nombres = [...this.nombres, this.nuevoNombre];
    if (campo) {
      campo.value = "";
      this.nuevoNombre = "";
    }
  }

  detectarInput(evento: KeyboardEvent) {
    this.nuevoNombre = (evento.target as HTMLInputElement).value;

    if (evento.key === "Enter") {
      this.agregarNombre();
    }
  }
}
