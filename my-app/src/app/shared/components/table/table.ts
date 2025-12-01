import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})

export class Table {
  @Input("datos") items: string[] = [];
  @Input() titulo: string = "";
  
  displayData: string[] = [];
  
  @Output() onItemSelected: EventEmitter<string> = new EventEmitter();
  
  buscar: string = ""
  buscarTimer: any;
  @Input() selectedItem: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Llegaron nuevos datos", changes);
    if (changes["titulo"]) {
      console.log("El titulo cambio");
    }
    if ((changes["items"])) {
      console.log("Los datos cambiaron");
      this.displayData = [...this.items]
    }
  }

  clickHandler(item: string) {
    console.log("CLICK: ", item);
    this.onItemSelected.emit(item);
    this.selectedItem = item;
  }
  filterData(){
    clearTimeout(this.buscarTimer);
    
    this.buscarTimer = setTimeout(() => {
      this.displayData = this.items.filter(item => {
        return item.toLowerCase().includes(this.buscar.toLowerCase())
      })
      console.log("AAAHHHH")
      console.log(this.displayData)
    }, 500)
  }
}
