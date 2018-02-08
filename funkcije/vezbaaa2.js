function isItBlank(a) {
    var check;
    if (a === " ") {
        check = true
    } else {
        check = false;
    }
    return check;
}
var result  = isItBlank("fdhsh");
console.log(result);