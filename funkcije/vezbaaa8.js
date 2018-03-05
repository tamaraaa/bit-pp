var t = "tashke";
function check(a) {
    var str;
    if (typeof a === "string") {
        str = true;
    } else {
        str = false;
    }
    return str;
}
var result = check(t);
console.log(result);