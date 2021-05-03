import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { MockRaceService } from './mock.race.service';
import { RaceService } from './race.service';
import { RacesComponent } from './races/races.component';
const IS_PROD = false;
// const IS_PROD = true;
@NgModule({
  declarations: [AppComponent, RacesComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: RaceService,
      useFactory: (apiSerivice: ApiService) => {
        return IS_PROD ? new RaceService(apiSerivice) : new MockRaceService();
      },
      deps: [ApiService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
