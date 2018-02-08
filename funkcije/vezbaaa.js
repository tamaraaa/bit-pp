function isAString(a) {
    var check;
    if (typeof a === "string") {
        check = true;
    } else {
        check = false;
    }
    return check;
}
var result = isAString(12);
console.log(result);