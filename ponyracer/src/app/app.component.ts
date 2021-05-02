import { Component } from '@angular/core';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ponyracer';
  numberOfUsers = 146;
  user: any = { name: 'Santosh Marigowda' };
}
