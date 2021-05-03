import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  get(path: string): Array<any> {
    // call to backend, later
    return [{ name: 'Reading' }, { name: 'Mandya' }];
  }
}
