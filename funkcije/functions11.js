"use strict";

function rotation (arr, k ){
    var i = k;
    var c = 0;
    var result =[];

    for (i; i< arr.length; i++) {

    result[c] = arr[i];
    c++;
}

    for  (var x = 0; x < k; x++ ){
        result [c] = arr [x];
    c++;
    }

    return result;

}

console.log(rotation([1,2,3,4,5,6],2));