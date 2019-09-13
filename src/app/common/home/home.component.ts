import { Component, OnInit } from '@angular/core';
import { ConsumptionCenter } from 'src/app/shared/models/consumption-center';
import { ConsumptionCenterService } from 'src/app/shared/services/consumption-center.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurants: Array<ConsumptionCenter>;
  bares: Array<ConsumptionCenter>;
  consumptionCenter: ConsumptionCenter;
  constructor(public _consumptionCenterService: ConsumptionCenterService,  private router: Router,private route: ActivatedRoute, outlet: RouterOutlet) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('hotelId'));
    console.log(this.route.snapshot.data.hotelId);
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
