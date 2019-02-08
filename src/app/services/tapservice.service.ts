import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TapserviceService {

  constructor(
    public http: HttpClient
  ) { }

  saveData(body) {
    return this.http.post('http://pamasmell.herokuapp.com/api/users',body).toPromise();
  }
}
