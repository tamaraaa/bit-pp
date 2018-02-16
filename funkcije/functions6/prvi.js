
"use strict"
var countVowels = function (str) {
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {

            counter++;

        }



        
    }
    return counter;
}

var result = countVowels("Ghgfhfg");
console.log(result);
