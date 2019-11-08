import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { UserProvider } from '../../providers/user/user';
import { TripProvider } from '../../providers/trip/trip';
import { RiderDriverlistPage } from '../rider-driverlist/rider-driverlist';
declare var google;

@IonicPage()
@Component({
  selector: 'page-rider-map',
  templateUrl: 'rider-map.html',
})
export class RiderMapPage {
  destination: any = '';
  origin: any;
  myLocation: any;  
  
  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public user: UserProvider,
              public trip: TripProvider,
              ) {}

  ionViewDidLoad(){
    console.log('cargando mapa');
    this.getPosition()
    console.log(this.trip.vehicle)
  }

   getPosition(){
    this.geolocation.getCurrentPosition().then(response => {
      this.calculateAndDisplayRoute(response.coords.latitude, 
        response.coords.longitude)
    })
  }

  calculateAndDisplayRoute(myLat, myLng) {
    let that = this;
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map-route'), {
      zoom: 10,
      center: {lat: myLat, lng: myLng}
    });
    directionsDisplay.setMap(map);
    
    var pos = {
      lat: myLat,
      lng: myLng,
    };
    map.setCenter(pos);
    that.myLocation = new google.maps.LatLng(pos);

    directionsService.route({
      //origin: this.origin,
      //destination: this.destination,
      origin: this.trip.pick_up,
      destination: this.trip.drop_off,
      travelMode: 'DRIVING'
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

  createTrip(){
    this.trip.send(
      'create_trip',
      {
      date: this.trip.date,
      hour: this.trip.hour,
      pick_up: this.trip.pick_up,
      drop_off: this.trip.drop_off,
      vehicle: this.trip.vehicle
      })
    this.navCtrl.push(RiderDriverlistPage)
  }
  
}
