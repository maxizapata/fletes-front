import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketProvider } from "../websocket/websocket";

const CHAT_URL = "ws://192.168.0.103:8000/ws/trip/";

export interface Message {
  author: string;
  message: string;
}


@Injectable()
export class CommunicationProvider {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketProvider) {
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).map(
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
