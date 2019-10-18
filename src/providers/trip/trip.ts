import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TripProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TripProvider {

  constructor(public http: HttpClient) {}

  public username: string
  public id: string
  public email: string
  public first_name: string
  public last_name: string
  public phone_number: string;
  public group: string
  public token: any
  public photo: any
  public password1: string;
  public password2: string;
  public verifiedMobile: boolean;

}
