import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  get(path: string): Array<any> {
    // call backend to get races data, later
    return [{ name: 'Reading - Real Race' }, { name: 'Mandya - Real Race' }];
  }
}
