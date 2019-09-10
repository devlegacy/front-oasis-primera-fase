import { Component, OnInit, Input } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { Hotel } from 'src/app/shared/models/hotel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hotel: Hotel;
  today: number = Date.now();

  constructor(public _hotelService: HotelService) { }

  ngOnInit() {
    this.getHotelById(1);
  }

  getHotelById(id: number) {
    this._hotelService.getById(id).subscribe(
      (response) => {
        this.hotel = response.data.hotel;
      },
      err => console.error(err),
      () => console.log('Finish load data'),
    );
  }

}
