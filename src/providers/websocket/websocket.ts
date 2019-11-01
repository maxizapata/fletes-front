import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx";
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';
import { RequestProvider } from '../request/request';
import { map, share } from 'rxjs/operators';
import { UserProvider } from '../user/user';

export interface Message {
  author: string;
  message: string;
}


@Injectable()
export class WebsocketProvider {

  constructor(public http: HttpClient,
              public request: RequestProvider,
              public user: UserProvider) {}

  webSocket: WebSocketSubject<any>;
  webSocketReceive: WebSocket
  messages: Observable<any>; 

  private subject: Rx.Subject<MessageEvent>;

  /*
  public connect(url): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }
  */

  public connect(url): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }


  private create(url): Rx.Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Rx.Subject.create(observer, observable);
  }

  receiveMessages(url) {
    this.messages = <Subject<Message>>this.connect(url).map(
      (response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
          };
        });
  }

}