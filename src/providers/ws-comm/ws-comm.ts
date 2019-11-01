import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketProvider } from "../websocket/websocket";
import { UserProvider } from '../../providers/user/user';
import { TripProvider } from '../../providers/trip/trip';

export interface Message {
  author: string;
  message: string;
}


@Injectable()
export class WsCommProvider {
  public messages: Subject<Message>;

  constructor(ws: WebsocketProvider,
              user: UserProvider) {
    console.log(user.email + 'llamo a wsComm')
    this.messages = <Subject<Message>>ws.connect('127.0.0.1:8000/ws/trips/2/camioneta/').map(
      (response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        };
      }
    );
  }
}