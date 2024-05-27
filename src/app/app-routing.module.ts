import { Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { LoginComponent } from './components/login/login.component';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: 'login/callback', component: OktaCallbackComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'category/:id',
    component: RoomListComponent
  },
  {
    path: 'category',
    component: RoomListComponent
  },
  {
    path: 'rooms',
    component: RoomListComponent
  },
  {
    path: 'rooms/:id',
    component: RoomDetailsComponent
  },
  {
    path: 'search/:keyword',
    component: RoomListComponent
  },
  {
    path: '',
    redirectTo: '/rooms',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/rooms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
