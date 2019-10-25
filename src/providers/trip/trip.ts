import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { RequestProvider } from '../request/request';
import { UserProvider } from '../../providers/user/user'

@Injectable()
export class TripProvider {
  webSocket: WebSocketSubject<any>;
  webSocketReceive: WebSocket
  messages: Observable<any>; 

  constructor(
    public http: HttpClient,
    public request: RequestProvider,
    public user: UserProvider
    ) {}
  
  wsConnect(): void{
    if (!this.webSocket || this.webSocket.complete){
      this.webSocket = new WebSocketSubject(this.request.set_url('ws_connect', this.user.id, 'camioneta'));
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
