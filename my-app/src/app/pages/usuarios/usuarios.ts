import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User as UserService } from '../../shared/services/user';
import { User as IUser } from '../../shared/data-types/user';
import { Table } from '../../shared/components/table/table';
import { DataUser } from '../../shared/components/data-user/data-user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  imports: [Table, DataUser],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios implements OnInit {
  users: IUser[] = [];
  userNames: string[] = [];

  selectedUser: IUser | undefined;

  constructor(private userService: UserService, private router: Router, private cdr: ChangeDetectorRef) {}

  userSelectedHandler(name: string) {
    console.log("El nombre del usuario seleccionado es: ", name)
    
    const res = this.users.find(user => {
      return user.name === name
    });
    console.log(res)
    this.selectedUser = res;
    this.router.navigateByUrl("/usuarios/" + res?.id);
  }

  cleanUserHandler() {
    this.selectedUser = undefined;
    console.log(11112222333)
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (response) => {
        console.log(response)
        this.users = response;
        this.userNames = response.map(element => {
          return element.name
        })
        this.cdr.detectChanges();
      },
      error: (err) => {},
    })
  }
}
