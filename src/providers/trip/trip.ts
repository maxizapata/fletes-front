import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable()
export class TripProvider {
  webSocket: WebSocketSubject<any>;
  webSocketReceive: WebSocket
  messages: Observable<any>; 

  constructor(public http: HttpClient) {}
  
  wsConnect(): void{
    if (!this.webSocket || this.webSocket.complete){
      this.webSocket = new WebSocketSubject('ws://192.168.0.103:8000/ws/trip/');
      this.messages = this.webSocket.pipe(share());
      this.messages.subscribe(message => console.log(message))
    }
  }

  createTrip(rider, pick_up, drop_off, veh_type): void { // new
    this.wsConnect();
    const message: any = {
      type: 'create.trip',
      veh_type: veh_type,
      user_id: rider,
      data: {
        rider: rider,
        pick_up: pick_up,
        drop_off: drop_off,
      }
    };
    console.log(message)
    this.webSocket.next(message);
  }

  wsDisconnect(){
    this.webSocket.complete()
    }


  }
