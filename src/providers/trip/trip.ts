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
  uuid: string
  driver: string
  rider: string
  create_at: string
  update_at: string
  status: string
  vehicle: string
  vehicle_name: string
  date: string
  hour: string

  connect(vehicle): void{
    if (!this.webSocket || this.webSocket.complete){
      this.webSocket = new WebSocketSubject(this.request.setUrl('ws_connect', this.user.id));
      this.messages = this.webSocket.pipe(share());
      this.messages.subscribe(message => console.log(message))
    }
  }

  send(action, data?): void {
    this.connect(this.vehicle);
    const message: any = {
      action: action,
      veh_type: this.vehicle,
      user_id: this.user.id,
      token: this.user.token,
      data: data
    };
    this.webSocket.next(message);
  }


  disconnect(){
    console.log('Notice: Disconnect function')
    this.webSocket.complete()
  }


}
