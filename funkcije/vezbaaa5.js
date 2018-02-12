"use strict";
var t = "Tamara";

function firstOccurenceOfStr(str, letter) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            return i;
            break;
        }
    }
}
var result = firstOccurenceOfStr(t, "a");
console.log(result);