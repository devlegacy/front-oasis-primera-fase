import { Component, OnInit, Input } from '@angular/core';
import { ConsumptionCenter } from 'src/app/shared/models/consumption-center';
import { ConsumptionCenterService } from 'src/app/shared/services/consumption-center.service';

@Component({
  selector: 'app-consumption-center',
  templateUrl: './consumption-center.component.html',
  styleUrls: ['./consumption-center.component.scss'],
  host: {
    "[class.light-theme]": "( theme === 'light' )",
    "[class.dark-theme]": "( theme === 'dark' )"
  }
})
export class ConsumptionCenterComponent implements OnInit {
  @Input() title: string;
  @Input() consumptionCenters: Array<ConsumptionCenter>;
  @Input() theme: string;
  public consumptionDetail: ConsumptionCenter;

  constructor(public _consumptionCenterService: ConsumptionCenterService) {
  }

  ngOnInit() { }

  getDetails(url: string) {
    this.consumptionDetail = null;
    this._consumptionCenterService.getDetailsByUrl(url).subscribe(
      (response) => {
        this.consumptionDetail = response.data;
      },
      err => { },
      () => {
        console.info('Finish load consumptionDetail(bar/restaurant) data');
      }
    );
  }

}
