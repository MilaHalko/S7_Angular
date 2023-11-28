import { Component } from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab6-pipes2';
  num: number = 15.45;
  users = ["Tom", "Alice", "Sam", "Kate", "Bob"];
  phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
  phone: Observable<string>|undefined;
  constructor() { this.showPhones(); }
  showPhones() {
    this.phone = interval(500).pipe(map((i: number) => this.phones[i]));
  }
}
