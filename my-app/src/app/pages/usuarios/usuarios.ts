import { Component, OnInit } from '@angular/core';
import { User as UserService } from '../../shared/services/user';
import { User as IUser } from '../../shared/data-types/user';
import { Table } from '../../shared/components/table/table';


@Component({
  selector: 'app-usuarios',
  imports: [Table],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios implements OnInit {
  users: IUser[] = [];
  userNames: string[] = [];

  constructor(private userService: UserService) {}

  userSelectedHandler(name: string) {
    console.log("El nombre del usuario seleccionado es: ", name)
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (response) => {
        console.log(response)
        this.users = response;
        this.userNames = response.map(element => {
          return element.name
        })
      },
      error: (err) => {},
    })
  }
}
