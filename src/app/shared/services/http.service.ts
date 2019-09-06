import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_URL = environment.API_URL;

  constructor(public _http: HttpClient) { }

  public get(url): Observable<any> {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

    };

    return this._http.get(url, {
      headers,
    });
  }
}
