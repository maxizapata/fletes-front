import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx";
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { RequestProvider } from '../request/request';
import { map, share } from 'rxjs/operators';
import { UserProvider } from '../user/user';

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

  connect(vehicle): void{
    if (!this.webSocket || this.webSocket.complete){
      this.webSocket = new WebSocketSubject(this.request.set_url('ws_connect', this.user.id, vehicle));
      this.messages = this.webSocket.pipe(share());
      this.messages.subscribe(message => console.log(message))
    }
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

  disconnect(){
    console.log('Notice: Disconnect function')
    this.webSocket.complete()
  }

}