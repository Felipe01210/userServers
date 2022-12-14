import { Injectable } from '@angular/core';
import { Server } from '../interfaces/servers';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  
  constructor(private http: HttpClient) { }

  private url:string= 'http://localhost:3000/users'
  
  _servers = [
    {
      id: 1,
      name: "Production server",
      status: "online"
    },
    {
      id: 2,
      name: "Test server",
      status: "offline"
    },
    {
      id: 3,
      name: "Dev server",
      status: "offline"
    }
  ]

  get servers(): Server[] {
    return[...this._servers]
  }

  getServer(id:number){
    return this.servers.filter(server=>server,id==id)
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.url+'/'+id)
  }
}
