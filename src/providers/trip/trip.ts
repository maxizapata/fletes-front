import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestProvider } from '../request/request';
import { UserProvider } from '../../providers/user/user';
import { WebsocketProvider } from '../websocket/websocket'

@Injectable()
export class TripProvider {
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

  createTrip(rider, pick_up, drop_off, veh_type): void {
    this.ws.connect('camioneta');
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
    this.ws.webSocket.next(message);
  }

}
