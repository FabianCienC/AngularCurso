import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User as IUser } from '../data-types/user';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})

export class User {
  constructor(private httpClient: HttpClient){}
  
  getCleanUser(): IUser {
    return {
      name: '',
      email: '',
      username: '',
      address: {
        calle: '',
        zipcode: ''
      }
    }
  }

  getUser(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(environment.apiUrl + "/users")
  }

  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(environment.apiUrl + "/users/" + id)
  }

  createUser(){

  }
}
