import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService extends HttpService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getById(id: number):Observable<any> {
    const url = `${this.API_URL}hotels/${id}/`;
    return this.get(url);
  }
}
