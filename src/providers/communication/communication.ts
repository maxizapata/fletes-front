import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketProvider } from '../websocket/websocket';
import { RequestProvider } from '../request/request';
import { UserProvider } from '../user/user';

export interface Message {
  author: string;
  message: string;
}


@Injectable()
export class CommunicationProvider {
  public messages: Subject<Message>;

  constructor(public wsService: WebsocketProvider,
              public request: RequestProvider,
              public user: UserProvider) {}
}
