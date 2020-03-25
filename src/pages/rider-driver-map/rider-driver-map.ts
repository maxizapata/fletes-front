import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { TripProvider } from '../../providers/trip/trip';
import { WebsocketProvider } from '../../providers/websocket/websocket';
import { UserProvider } from '../../providers/user/user';
declare var google;

@IonicPage()
@Component({
  selector: 'page-rider-driver-map',
  templateUrl: 'rider-driver-map.html',
})
export class RiderDriverMapPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public trip: TripProvider,
              public geolocation: Geolocation,
              public user: UserProvider,
              public ws: WebsocketProvider) {
  }

  ionViewDidLoad(){
    console.log(this.trip.start_driver_lat, this.trip.start_driver_lng);
    this.calculateAndDisplayRoute();
  }

  start_driver_pos: any;

  calculateAndDisplayRoute() {
    console.log('CALCULATE DISPLAY')
    
    let that = this;
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map-route'), {
      zoom: 10,
      center: {lat: this.trip.start_driver_lat, lng: this.trip.start_driver_lng}
    });
    directionsDisplay.setMap(map);

    var driver_pos = {
      lat: this.trip.start_driver_lat,
      lng: this.trip.start_driver_lng,
    };
    map.setCenter(driver_pos);

    this.start_driver_pos = new google.maps.LatLng(driver_pos);
    console.log(this.start_driver_pos)

    directionsService.route({
      origin: this.start_driver_pos,
      destination: this.trip.pick_up,
      travelMode: 'DRIVING',
    }, 
    function(response, status) {
      if (status === 'OK') {
        console.log('status ok')
        directionsDisplay.setDirections(response);
        console.log(response)
      } 
      else {
        console.log('status error')
        window.alert('Error al obtener dirección' + status);
      }
    });

  
  }

  calcelService(){
    console.log('Cancel service')
  }

}
