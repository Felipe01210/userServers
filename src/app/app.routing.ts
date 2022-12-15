import { HomeComponent } from "./home/home.component";
import { UsersComponent } from './users/users/users.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from './servers/server/server.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            { path: ':id/:name', component: UserComponent}
        ]
    },
    {
        path: 'servers',
        component: ServersComponent,
        children: [
            { path: ':id/edit', component: EditServerComponent },
            { path: ':id', component: ServerComponent }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}