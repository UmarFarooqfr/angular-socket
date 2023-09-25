import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const socketIoConfig: SocketIoConfig = {
  url: 'http://localhost:3000', options: {
    transports: ['websocket', 'polling', 'flashsocket']
  }
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(socketIoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
