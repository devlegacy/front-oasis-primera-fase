import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConsumptionCenterService } from 'src/app/shared/services/consumption-center.service';
import { ConsumptionCenter } from 'src/app/shared/models/consumption-center';

@Component({
  selector: 'app-consumption-center-list',
  templateUrl: './consumption-center-list.component.html',
  styleUrls: ['./consumption-center-list.component.scss'],
  host: {
    "[class.light-theme]": "( theme === 'light' )",
    "[class.dark-theme]": "( theme === 'dark' )"
  }
})
export class ConsumptionCenterListComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  consumptionCenters: Array<ConsumptionCenter>;
  @Input()
  theme: string;

  @Output()
  onGetConsumptionCenter = new EventEmitter<ConsumptionCenter>();

  public consumptionDetail: ConsumptionCenter;

  constructor(public _consumptionCenterService: ConsumptionCenterService) {
  }

  ngOnInit() { }

  getDetails(url: string) {
    this.consumptionDetail = null;
    this.onGetConsumptionCenter.emit(this.consumptionDetail);
    this._consumptionCenterService.getDetailsByUrl(url).subscribe(
      (response) => {
        this.consumptionDetail = response.data;
        this.onGetConsumptionCenter.emit(this.consumptionDetail);
      },
      err => { },
      () => {
        console.info('Finish load consumptionDetail(bar/restaurant) data');
      }
    );
  }
}
