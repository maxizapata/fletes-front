import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestProvider } from '../request/request'


@Injectable()
export class VehiclesProvider {

  constructor(
    public http: HttpClient,
    public request: RequestProvider) {}

  driver_vehicles: any = []
  vehicle_list: any = []

  getDriverVehicles(){
    let token = window.localStorage.getItem('token');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + token };
    this.request.resquestGet('driver_vehicles', headers)
    .subscribe((data) => {
      this.driver_vehicles = data
      console.log(this.driver_vehicles) 
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
      this.vehicle_list = data
      console.log(this.driver_vehicles) 
    },
    (error)=>{
        console.log(error)
      }
    )
  }

}
