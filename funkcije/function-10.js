function combArreys(arr1, arr2) {
    var c = 0;
    var result = [];

    for (var i = 0; i < arr1.length; i++) {

       
        result[c] = arr1[i];
        c++;
        result[c] = arr2[i];
        c++;
    }
    return result;
}

console.log(combArreys(["a", "b", "c"], [1, 2, 3]));
