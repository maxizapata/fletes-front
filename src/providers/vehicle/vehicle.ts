import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestProvider } from '../request/request';


@Injectable()
export class VehicleProvider {

  constructor(
    public http: HttpClient,
    public request: RequestProvider) {}

  vehicleList: any = []

  getListVehicles(){
    let token = window.localStorage.getItem('token');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + token };
    this.request.resquestGet('list_vehicles', headers)
    .subscribe((data) => {
      this.vehicleList = data
    },
    (error)=>{
        console.log(error)
      }
    )
  }


}
