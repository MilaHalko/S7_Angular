import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpService, User} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: Observable<User[]> | undefined;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {

    this.users = this.httpService.getUsers();
    console.log(this.users);
  }
}
