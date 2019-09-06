import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarService extends HttpService {

  constructor(public _http: HttpClient) {
    super(_http);
  }

  getAll(): Observable<any> {
    const url = `${this.API_URL}hotels/1/bares`;
    return this.get(url);
  }
}
