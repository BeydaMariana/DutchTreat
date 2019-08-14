import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var Login = /** @class */ (function () {
    function Login(data, route) {
        this.data = data;
        this.route = route;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (_this.data.order.items.length == 0) {
                _this.route.navigate(['']);
            }
            else {
                _this.route.navigate(['checkout']);
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    Login = tslib_1.__decorate([
        Component({
            selector: "login",
            templateUrl: "login.component.html"
        })
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.component.js.map