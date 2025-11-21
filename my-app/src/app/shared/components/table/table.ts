import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})

export class Table {
  @Input("datos") items: string[] = [];
  @Input() titulo: string = "";

  @Output() onItemSelected: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Llegaron nuevos datos", changes);
    if (changes["titulo"]) {
      console.log("El titulo cambio");
    }
    if ((changes["items"])) {
      console.log("Los datos cambiaron");
    }
  }
  clickHandler(item: string) {
    console.log("CLICK: ", item);
    this.onItemSelected.emit(item);
  }
}
