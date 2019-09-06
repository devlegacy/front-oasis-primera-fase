import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionCenterService extends HttpService {

  constructor(public _http: HttpClient) {
    super(_http);
  }

  getDetailsByUrl(url:string):Observable<any> {
    return this.get(url);
  }

  getAllRestaurants():Observable<any> {
    const url = `${this.API_URL}hotels/1/restaurants`;
    return this.get(url);
  }

  getAllBares(): Observable<any> {
    const url = `${this.API_URL}hotels/1/bares`;
    return this.get(url);
  }
}
