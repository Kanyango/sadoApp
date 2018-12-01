import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'home-component',
    templateUrl: './home.html',
    providers: [NgbCarouselConfig]
})

export class HomeComponent
{
    images = ['assets/imgs/1.jpg','assets/imgs/2.jpg','assets/imgs/3.jpg', 'assets/imgs/4.jpg','assets/imgs/5.jpg','assets/imgs/6.jpg','assets/imgs/7.jpg',
    'assets/imgs/8.jpg','assets/imgs/9.jpg','assets/imgs/10.jpg', 'assets/imgs/11.jpg',
    'assets/imgs/12.jpg','assets/imgs/13.jpg','assets/imgs/14.jpg','assets/imgs/15.jpg',
    'assets/imgs/16.jpg']

}