import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomService } from './services/room.service';
import { RoomCategoryMenuComponent } from './components/room-category-menu/room-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import myAppConfig from './config/my-app-config';
import OktaAuth from '@okta/okta-auth-js';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { SignInComponent } from './components/sign-in/sign-in.component';

const oktaConfig = myAppConfig.oidc;

const oktaAuth = new OktaAuth(oktaConfig);

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomCategoryMenuComponent,
    SearchComponent,
    RoomDetailsComponent,
    LoginComponent,
    LoginStatusComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    OktaAuthModule
  ],
  providers: [RoomService, { provide: OKTA_CONFIG, useValue: { oktaAuth }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
