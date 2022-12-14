import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/interfaces/servers';
import { ServersService } from 'src/app/services/servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  server! : Server;

  constructor(private sservice: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];

  }

}
