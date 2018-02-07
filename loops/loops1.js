var sum= 0;
var prod = 1;
var arr=[1,2,2.5,4]
for(var i = 0;i < arr.length;i++){
 if(arr[i] % 1 === 0){
sum += arr[i];
prod*= arr[i];
}
}
console.log(sum);
console.log(prod);