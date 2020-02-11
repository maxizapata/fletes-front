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

  }

  whereIsTheDriver(){
    let data = {
      trip: this.trip.id,
      rider: this.user.id
    }
    this.ws.sendMsg(
      'where_is_the_driver',
      data
      )
  }

  myLocation: any;  
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
      destination: this.trip.pick_up,
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

}
