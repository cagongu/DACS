import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomService } from './services/room.service';
import { RoomCategoryComponent } from './components/room-category/room-category.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { httpInterceptorProviders } from './helpers/auth.interceptor';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomCategoryComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    RoomDetailsComponent,
    RoomManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RoomService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
