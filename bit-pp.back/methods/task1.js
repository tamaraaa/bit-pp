// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
function duplicate (arr){
    newArr = [];
    
    for(var i=0;i<=arr.length+1;i++){
        var dupl = String(arr);
     newArr[i]= dupl[i].repeat(2);
   
    }
    for(var j = newArr.length - 1; j >= 0; j--) {
        if(newArr[j] === ",,") {
           newArr.splice(j, 2);
           return newArr;
        }
    }
        

     
}
    
console.log(duplicate([1,2,3]));
