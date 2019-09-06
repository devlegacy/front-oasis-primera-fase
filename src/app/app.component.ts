import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './shared/services/restaurant.service';
import { BarService } from './shared/services/bar.service';
import { ConsumptionCenterService } from './shared/services/consumption-center.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ASSETS_API_URL = environment.ASSETS_API_URL;
  hotel;
  restaurants;
  bares;
  consumptionDetail;
  constructor(public _consumptionCenterService: ConsumptionCenterService) { }

  ngOnInit() {
    this.getAllRestaurants();
    this.getAllBares();
  }

  getAllRestaurants() {
    this._consumptionCenterService.getAllRestaurants().subscribe(
      (response) => {
        this.hotel = response.data.hotel;
        this.restaurants = response.data.consumptionCenter;

        if (this.restaurants) {
          this.getDetails(this.restaurants[0].href.details);
        }
      },
      err => { },
      () => {
        console.info('Finish load data');
      }
    );
  }

  getAllBares() {
    this._consumptionCenterService.getAllBares().subscribe(
      (response) => {
        this.bares = response.data.consumptionCenter;
      },
      err => { },
      () => {
        console.info('Finish load data');
      }
    );
  }

  getDetails(url: string) {
    this.consumptionDetail = null;
    this._consumptionCenterService.getDetailsByUrl(url).subscribe(
      (response) => {
        this.consumptionDetail = response.data;
      },
      err => { },
      () => {
        console.info('Finish load data');
      }
    );
  }
}
