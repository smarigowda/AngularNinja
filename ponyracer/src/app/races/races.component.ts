import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css'],
})
export class RacesComponent implements OnInit {
  races: any = [];
  constructor() {}

  refreshRacesList(event: Event) {
    console.log('Refreshing races list...');
    console.log(event);
    this.races = [{ name: 'London' }, { name: 'Lyon' }];
  }

  ngOnInit(): void {}
}
