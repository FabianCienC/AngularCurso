import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User as IUser } from '../../shared/data-types/user';
import { User as UserService } from '../../shared/services/user';


@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})

export class UserDetails implements OnInit {
  idUser: string;
  user: IUser | undefined;

  isError: boolean = false;
  isLoading: boolean = true;

  constructor (private activatedRoute: ActivatedRoute, private userService: UserService, private cdr: ChangeDetectorRef) {
    this.idUser = this.activatedRoute.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser).subscribe({
      next: (response) => {
        this.user = response;
        console.log(this.user)
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err)
        this.isError = true;
      }
    })
  }
}
