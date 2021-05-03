import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  constructor(private apiSerivice: ApiService) {}

  list(): Array<any> {
    return this.apiSerivice.get('/races');
  }
}
