import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './donate/donate';

import { HomeComponent } from './home/home';

const routes: Routes = 
        [
         { path: '', component: HomeComponent },
         { path: 'donate', component: DonateComponent } 
        ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}