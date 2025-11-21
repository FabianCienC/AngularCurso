import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User as IUser } from '../data-types/user';


@Injectable({
  providedIn: 'root',
})

export class User {
  constructor(private httpClient: HttpClient){}
  
  getCleanUser() {
    
  }

  getUser(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
  }

  createUser(){

  }
}
