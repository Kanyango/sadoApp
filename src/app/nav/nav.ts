import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'navbar-component',
    templateUrl: './nav.html'
})

export class NavbarComponent
{
    @Input() id: any;
    
    constructor(){}

}