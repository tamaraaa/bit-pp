"use strict";
var t = "tamara";
function countNumOfLetter (str,letter){
var counter=0;
for(var i= 0 ;i<str.length;i++){
    if(str[i]=== letter){
        counter++;
    }
}
return counter;
}
var result = countNumOfLetter(t, 'a');
console.log(result);