import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockRaceService {
  constructor() {}
  list(): Array<any> {
    return [{ name: 'London Mock Race' }];
  }
}
