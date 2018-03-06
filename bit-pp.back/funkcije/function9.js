"use strict";
 function celsiusToFahrenheit(celsius){
     var fahrenheit = celsius * 1.8 + 32;

     return console.log(fahrenheit);
 }



function fahrenheitToCelsius(fahrenheit){
    var celsius =5/9*(fahrenheit-32) ;

    return console.log(celsius);
}

celsiusToFahrenheit(22);
fahrenheitToCelsius(33);