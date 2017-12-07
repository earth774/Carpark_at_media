import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    hasLogged: boolean;
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() {
        this.hasLogged = false;
        if (localStorage.getItem('isLoggedin')) {
            this.hasLogged = true;
        }
    }

    ngOnInit() {}
}
