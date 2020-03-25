import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { UserProvider } from '../../providers/user/user';
import { TripProvider } from '../../providers/trip/trip';
import { RiderDriverlistPage } from '../rider-driverlist/rider-driverlist';
import { RequestProvider } from '../../providers/request/request';
import { WebsocketProvider } from '../../providers/websocket/websocket';
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
              public request: RequestProvider,
              public ws: WebsocketProvider
              ) {}

  ionViewDidLoad(){
    this.getPosition()
  }

  getPosition(){
    this.geolocation.getCurrentPosition().then(response => {
      this.calculateAndDisplayRoute(response.coords.latitude, 
        response.coords.longitude)
    })
  }

  calculateAndDisplayRoute(myLat, myLng) {
    console.log("TRATANDO CON SET TIMEOUT")
    setInterval(this.prueba, 10000)
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

  prueba(map){
    let lats = [-34.1085258, -34.2085258, -34.3085258, -34.4085258, -34.5085258]
    let lngs = [-58.4482781, -58.5482781, -58.6482781, -58.7482781, -58.8482781]
    for (let i = 0; i == lats.length; i++){
      this.updateLocation(map, lats[i], lngs[i])  
    }
  }

  updateLocation(map, lat, lng){
    let driverLocation = new google.maps.LatLng(lat, lng);
    google.maps.event.addListenerOnce(map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: driverLocation,
        map: map,
        title: 'Hello World!'
      });
      map.classList.add('show-map');
    });
  }



  createTrip(){
    this.ws.sendMsg(
      'create_trip',
      {
      date: this.trip.date,
      hour: this.trip.hour,
      pick_up: this.trip.pick_up,
      drop_off: this.trip.drop_off,
      vehicle: this.trip.vehicle
      }, 
      this.trip.vehicle)
    this.navCtrl.setRoot(RiderDriverlistPage);
  }

}
