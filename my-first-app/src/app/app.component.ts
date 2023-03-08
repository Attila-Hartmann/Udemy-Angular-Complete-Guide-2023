import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classToggled = false;

  public toggleField() {
    this.classToggled = !this.classToggled;
  }

}
