/*for (var i = 0; i < 15; i++) {
    if (i % 2 === 0) {
        console.log("Even " + i);
    }
    else if(i % 2 !== 0){
        console.log("Odd " + i);
    }

}*/
/*var t = 0;
for (var i = 0; i < 1000; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        t += i;

    }

}
console.log(t);
*/
var numbers = [1, 1.5, 2, 2.5];
var sum = 0;
var prod = 1;
if ((numbers[i] * 10) % 10 === 0) {
    for (var i = 0; i < numbers.length; i++) {
        /*if ((numbers[i] * 10) % 10 === 0) {*/
        sum = sum + numbers[i];
        prod = prod * numbers[i];

    }

}
console.log(sum);
console.log(prod);
