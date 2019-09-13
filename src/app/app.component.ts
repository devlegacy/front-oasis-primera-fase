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


  constructor() { }

  ngOnInit() {

  }


}
