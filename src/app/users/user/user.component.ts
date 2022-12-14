import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/services/servers.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  user! : User;

  constructor(private sservice: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.sservice.getUser(this.route.snapshot.params['id'])
    .subscribe({
      next: (resp)=>{
        this.user = resp;
      }
    })
    }
  }
