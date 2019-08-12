import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class Login {
    constructor(private data: DataService,
        private route: Router) { }

    errorMessage: string = "";
    public creds = {
        username: "",
        password: ""
    };

    onLogin() {
        this.data.login(this.creds)
            .subscribe(success => {
                if (this.data.order.items.length == 0) {
                    this.route.navigate(['']);
                } else {
                    this.route.navigate(['checkout']);
                }
            }, err => this.errorMessage = "Failed to login")
    }
}