import { Component } from '@angular/core';
import { Table } from "../../shared/components/table/table";

@Component({
  selector: 'app-canciones',
  imports: [Table],
  templateUrl: './canciones.html',
  styleUrl: './canciones.scss',
})
export class Canciones {
  canciones = [
    "Cancion 1",
    "Cancion 2",
    "Cancion 3",
    "Cancion 4",
    "Cancion 5" 
  ]

  itemSelectedHandler(item: string) {
    console.log("Seleccion de Item: ", item)
  }
}
