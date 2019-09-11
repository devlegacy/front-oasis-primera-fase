import { Component, OnInit, Input } from '@angular/core';
import { ConsumptionCenter } from 'src/app/shared/models/consumption-center';
import { ConsumptionCenterService } from 'src/app/shared/services/consumption-center.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consumption-center',
  templateUrl: './consumption-center.component.html',
  styleUrls: ['./consumption-center.component.scss'],
})
export class ConsumptionCenterComponent implements OnInit {
  @Input()
  consumptionCenter: ConsumptionCenter;
  readonly ASSETS_API_URL = environment.ASSETS_API_URL;

  constructor() {
  }

  ngOnInit() { }

}
