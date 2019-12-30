import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RiderProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RiderProvider Provider');
  }

}
