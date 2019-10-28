import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestProvider } from '../request/request';

@Injectable()
export class VehiclesInfoProvider {}


@Injectable()
export class VehicleProvider {

  constructor(
    public http: HttpClient,
    public request: RequestProvider) {}

  driverVehicles: any = []
  vehicleList: any = []

  getDriverVehicles(){
    console.log('estamos en get drivers vehicles')
    let token = window.localStorage.getItem('token');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + token };
    this.request.resquestGet('driver_vehicles', headers)
    .subscribe((data) => {
      this.driverVehicles = data
      this.driverVehicles.is_active = false
      console.log(this.driverVehicles) 
    },
    (error)=>{
        console.log(error)
      }
    )
  }

  getListVehicles(){
    let token = window.localStorage.getItem('token');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + token };
    this.request.resquestGet('list_vehicles', headers)
    .subscribe((data) => {
      this.vehicleList = data
      console.log(this.driverVehicles) 
    },
    (error)=>{
        console.log(error)
      }
    )
  }

}
