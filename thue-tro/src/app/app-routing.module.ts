import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
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
    path: 'room-management/:id',
    component: RoomManagementComponent
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
