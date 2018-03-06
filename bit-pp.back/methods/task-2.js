"use strict";
function oddElements(arr) {
    var result;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result = true;
        }
    }
    return result;
}
console.log(oddElements([6, 2, 8, 2, 3]));

 function biggerThenMiddle(arr) {
 var newArr=[]  
var middleIndex = (arr.length-1) / 2

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[middleIndex]) {
            newArr.push(arr[i]);
         }


    }
    return newArr;
}
console.log(biggerThenMiddle([1, 2, 5, 7, 9]));