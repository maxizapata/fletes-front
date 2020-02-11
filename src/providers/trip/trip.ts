import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestProvider } from '../request/request';
import { UserProvider } from '../../providers/user/user';
import { WebsocketProvider } from '../websocket/websocket';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable()
export class TripProvider {
  webSocket: WebSocketSubject<any>;
  webSocketReceive: WebSocket
  messages: Observable<any>; 

  constructor(
    public http: HttpClient,
    public request: RequestProvider,
    public user: UserProvider,
    public ws: WebsocketProvider,
    ) {}
  
  id: string
  pick_up: string
  drop_off: string
  uuid: any
  driver: string
  driver_channel: string
  rider: string
  rider_channel: string
  create_at: string
  update_at: string
  status: string
  vehicle: string
  vehicle_name: string
  date: string
  hour: string
  price: number
  // ####################
  tripDetail: any;

  available_drivers:  Array<any> = []

  getTripInformation(){
    this.request.resquestGet('trip_detail', this.request.headers)
    .subscribe((data) => {
      return data;
    })
  }
}
