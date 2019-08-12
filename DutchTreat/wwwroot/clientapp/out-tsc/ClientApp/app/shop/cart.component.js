import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var Cart = /** @class */ (function () {
    function Cart(data, route) {
        this.data = data;
        this.route = route;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            this.route.navigate(["login"]);
        }
        else {
            this.route.navigate(["checkout"]);
        }
    };
    Cart = tslib_1.__decorate([
        Component({
            selector: "the-cart",
            templateUrl: "cart.component.html",
            styleUrls: []
        })
    ], Cart);
    return Cart;
}());
export { Cart };
//# sourceMappingURL=cart.component.js.map