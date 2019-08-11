import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ProductList = /** @class */ (function () {
    function ProductList() {
        this.products = [{
                title: "First Product",
                price: 19.99
            }, {
                title: "Second Product",
                price: 9.99
            }, {
                title: "Third Product",
                price: 14.99
            }
        ];
    }
    ProductList = tslib_1.__decorate([
        Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: []
        })
    ], ProductList);
    return ProductList;
}());
export { ProductList };
//# sourceMappingURL=productList.component.js.map