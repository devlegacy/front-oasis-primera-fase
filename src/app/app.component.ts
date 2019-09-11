import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './shared/services/restaurant.service';
import { BarService } from './shared/services/bar.service';
import { ConsumptionCenterService } from './shared/services/consumption-center.service';
import { environment } from 'src/environments/environment';
import { ConsumptionCenter } from './shared/models/consumption-center';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  restaurants: Array<ConsumptionCenter>;
  bares: Array<ConsumptionCenter>;
  consumptionCenter: ConsumptionCenter;

  constructor(public _consumptionCenterService: ConsumptionCenterService) { }

  ngOnInit() {
    this.getAllRestaurants();
    this.getAllBares();
  }

  getAllRestaurants() {
    this._consumptionCenterService.getAllRestaurants().subscribe(
      (response) => {
        this.restaurants = response.data.consumptionCenter;

        if (this.restaurants) {
          this.getDetails(this.restaurants[0].href.details);
        }
      },
      err => { },
      () => {
        console.info('Finish load restaurant data');
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
        console.info('Finish load bares data');
      }
    );
  }

  getDetails(url: string) {
    this.consumptionCenter = null;
    this._consumptionCenterService.getDetailsByUrl(url).subscribe(
      (response) => {
        this.consumptionCenter = response.data;
      },
      err => { },
      () => {
        console.info('Finish load restaurant/bar data');
      }
    );
  }

  onGetConsumptionCenter($event: ConsumptionCenter) {
    console.log($event);
    this.consumptionCenter = $event;
  }
}
