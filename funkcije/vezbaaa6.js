var t = "tamara";

function lastOccurenceOfStr(str, letter) {
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] === letter) {
            return i;
            break;
        }
    }
}
var result = lastOccurenceOfStr(t, "a");
console.log(result);