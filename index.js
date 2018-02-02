var x = 81

if (typeof x === 'number') {

    if (x > 99 || x < 10) {
        console.log("Error!");
    } else {
        var a = x % 10;
        var b = (x - a) / 10;
        console.log(a + "" + b);
    }

}