import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../user/user';
import { TripProvider } from '../../providers/trip/trip';

export interface Message {
  data: any
}

@Injectable()
export class WebsocketProvider {
  constructor(public http: HttpClient, public user: UserProvider, public request: RequestProvider) {}

  webSocket: WebSocketSubject<any> = webSocket('ws://' + this.request.domain + '/ws/trips/' + this.user.id + '/')

  subscribe_prueba(){
    console.log('Estoy suscrito!!!')
    this.webSocket.subscribe(
      msg => console.log('msg received: ' + msg),
      err => console.log('hubo un error!!!'),
      () => console.log('complete')
    )
  }

  sendMsg(action, data, vehicle?){
    let message = {
      action: action,
      veh_type: vehicle,
      token: this.user.token,
      user_id: this.user.id,
      data: data
    }
    this.webSocket.next(message)
  }
}