import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var Checkout = /** @class */ (function () {
    function Checkout(data, route) {
        this.data = data;
        this.route = route;
        this.errorMessage = "";
    }
    Checkout.prototype.onCheckout = function () {
        var _this = this;
        this.data.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.route.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to save order"; });
    };
    Checkout = tslib_1.__decorate([
        Component({
            selector: "checkout",
            templateUrl: "checkout.component.html",
            styleUrls: ['checkout.component.css']
        })
    ], Checkout);
    return Checkout;
}());
export { Checkout };
//# sourceMappingURL=checkout.component.js.map