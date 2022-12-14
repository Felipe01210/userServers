import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private sservice:ServersService) { }

  res: User[]=[]

  ngOnInit(): void {
    this.sservice.getUsers()
    .subscribe({
      next: (resp) => {
        this.res = resp;
      }
    })
  }

}
