import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';

@Component({
  selector: 'ns-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css'],
})
export class RacesComponent implements OnInit {
  races: any = [];
  constructor(private raceService: RaceService) {}

  refreshRacesList(event: Event) {
    console.log('Refreshing races list...');
    console.log(event);
    // this.races = [{ name: 'London' }, { name: 'Lyon' }];
    this.races = this.raceService.list();
    console.log(this.races);
  }

  ngOnInit(): void {}
}
