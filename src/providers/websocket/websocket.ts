import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx";
import { Observable, Subject } from "rxjs/Rx";


export interface Message {
  data: any
}

@Injectable()
export class WebsocketProvider {
  constructor(public http: HttpClient) {}

  public messages: Subject<Message>;

  private subject: Rx.Subject<MessageEvent>;
  
  public connect(url): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  wsConnect(url) {
    this.messages = <Subject<Message>>this.connect(url).map(
      (response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return data
      }
    );
  }

  private create(url): Rx.Subject<MessageEvent> {
    let ws = new WebSocket(url);
    console.log(url)
    console.log(ws)

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
}