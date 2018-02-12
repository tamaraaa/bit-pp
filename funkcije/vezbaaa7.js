"use strict";
var t = "bla bla";

function stringToArray(str) {
    var someArr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            someArr[i] = null;
        } else {
            someArr[i] = str[i];
        }
    }
    return someArr;
}
var result = stringToArray(t);
console.log(result);