"use strict"
function num(a){
    var stars="";

    for(var i= 0 ; i < a ;i++){
        stars += "*" ;
    }
    return console.log(stars);
}

function star (a,b,c){
    num(a);
    num(b);
    num(c);
}

star(10,15,3);