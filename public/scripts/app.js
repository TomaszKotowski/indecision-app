"use strict";

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return _this.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
