import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule }   from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { DonateComponent } from './donate/donate';
import { NavbarComponent } from './nav/nav';

const firebaseConfig = 
    {
    apiKey: "AIzaSyDe2-xFRqnsgbN0NsZH4B5wKeycfP2e4bg",
    authDomain: "sadoapp-1df14.firebaseapp.com",
    databaseURL: "https://sadoapp-1df14.firebaseio.com",
    projectId: "sadoapp-1df14",
    storageBucket: "sadoapp-1df14.appspot.com",
    messagingSenderId: "882666424157"
  };    
  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    NgxStripeModule.forRoot('pk_test_M5cYJzC59hvwQM4lXUBJ0D0W'),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
