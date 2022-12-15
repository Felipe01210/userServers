import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from 'src/app/interfaces/servers';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private sservice: ServersService,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get servers(): Server[] {
    return this.sservice.servers;
  }

}
