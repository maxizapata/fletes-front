import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestProvider } from '../request/request';
import { ControllerProvider } from '../controller/controller';
import { VehicleProvider } from '../vehicle/vehicle'

@Injectable()
export class DriverProvider {

  constructor(public http: HttpClient,
              public request: RequestProvider,
              public controller: ControllerProvider,
              public vehicle: VehicleProvider) {}
        
  myRequestedTrips: any = []
  myProgramedTrips: any = []
  myCompletedTrips: any = []
  currentTrip: any = []
  myVehicles: any = []

  searchActiveVehicles(vehicleId){
    let activeVehicles: Array<string> = []
    for (let vehicle of this.myVehicles){
      if (vehicle.is_active){
        activeVehicles.push(vehicle)
      }
    }
    let matchingVehicles: Array<string> = []
    for (let activeVehicle of activeVehicles) {
      if (activeVehicle['vehicle_type'] == vehicleId){
        matchingVehicles.push(activeVehicle)
      }
    }
    console.log(matchingVehicles)
    return matchingVehicles;
  }

  getMyVehicles(){
    console.log('estamos en get drivers vehicles')
    let token = window.localStorage.getItem('token');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + token };
    this.request.resquestGet('driver_vehicles', headers)
    .subscribe((data) => {
      this.myVehicles = data
    },
    (error)=>{
        console.log(error)
      }
    )
  }

  getDriverTrips(){
    this.myRequestedTrips = []
    this.myProgramedTrips = []
    this.myCompletedTrips = []
    this.currentTrip = []
    this.myVehicles = []
    console.log('Entrando de getDriverTrips')
    this.controller.presentLoading('Actualizando la información de tus viajes')
    let token = window.localStorage.getItem('token');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + token }
    this.request.resquestGet('requested_trips', headers)
    .subscribe((driver_trips) => {
      for (let _trip in driver_trips){
        let trip = driver_trips[_trip]
        for (let v in this.vehicle.vehicleList){
          let vehicle = this.vehicle.vehicleList[v]
          if (vehicle['id'] === trip['vehicle']){
            trip['vehicle_img'] = vehicle['picture']
          } 
        }
        if (trip['status'] = 'REQUESTED'){
          this.myRequestedTrips.push(trip)
        } else if (trip['status'] = 'PROGRAMED'){
          this.myProgramedTrips.push(trip)
        } else if (trip['status'] = 'COMPLETED'){
          this.myCompletedTrips.push(trip)
        } else if (trip['status'] = 'IN_PROGRESS'){
          this.currentTrip.push(trip)
        }
        console.log(trip)
      }
    })
    this.controller.dismissLoading()
  }

}
