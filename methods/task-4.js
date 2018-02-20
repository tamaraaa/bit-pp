"use strict"
function findSmollElements(arr,number) {
    var result=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]< number){
            result.push(arr[i]);

        }
    }
    return result;
}
console.log(findSmollElements([2,3,8,-2,11,4],6));