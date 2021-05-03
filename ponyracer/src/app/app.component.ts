import { Component } from '@angular/core';
import { RaceService } from './race.service';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ponyracer';
  numberOfUsers = 146;
  user: any = { name: 'Santosh Marigowda' };
  constructor(private raceService: RaceService) {

  }
  list(): Array<any> {
    return this.raceService.list();
  }
}
