import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/interfaces/servers';
import { ServersService } from '../../services/servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit {

  server! : Server;

  constructor(private sservice: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.server = this.sservice.getServer(params['id'])
      });

  }

}
