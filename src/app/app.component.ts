import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  islogIn: boolean = false;

  getLoginStatus(status: boolean) {
    console.log("status", status);
    this.islogIn = status;
  }
}
