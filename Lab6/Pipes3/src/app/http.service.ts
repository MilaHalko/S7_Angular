import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({providedIn:"root"})
export class HttpService{
  constructor(private http: HttpClient){ }
  getUsers(){
    return this.http.get<User[]>('assets/users.json');
  }
}

export interface User {
  name: string;
  age: number;
}

