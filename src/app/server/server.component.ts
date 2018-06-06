import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers], this is attribute and not element
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    .white-text {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 9;
  serverStatus = 'offline';
  server = 'AWS';
  showSecret = false;
  log = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
