import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  checkConnection() {
    this.socket.on('socket-connection', () => {
      console.log("Socket Connection Established");
    })
  }
}
