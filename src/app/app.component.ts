import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  changeText: boolean;
  constructor() {
     this.changeText = false;
  }
  title = 'EmployeeApp';
}
