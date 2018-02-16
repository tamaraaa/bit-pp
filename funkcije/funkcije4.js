"use strict";
var t = [1, 2, 3, 4, 5];
function calc(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            sum += a[i];
        }
    }
    return console.log(sum);
}
calc(t);
