import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { ConsumptionCenterService } from 'src/app/shared/services/consumption-center.service';
import { ConsumptionCenter } from 'src/app/shared/models/consumption-center';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurants: ConsumptionCenter[];
  consumptionDetail: ConsumptionCenter
  ;
  constructor(public _consumptionCenterService: ConsumptionCenterService) { }

  ngOnInit() {
    this.getAllRestaurants();
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
