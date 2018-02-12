"use strict";
var t = "How many times do A appear in TAMARA?";
function calc(str){
    var counter = 0;
    for(var i=0;i<str.length;i++ ){
        if(str[i] === "A" || str[i]=== "a"){
            counter++;
        }
    }
  return console.log(counter);
}
calc(t);
