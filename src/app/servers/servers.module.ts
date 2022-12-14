import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
