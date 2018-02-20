// Write a function that finds the smallest element of a given array.
//  The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: 
function findSallestElement (arr){

    
   var minValue=Math.min(... arr)
   var minLastIndex=arr.lastIndexOf(minValue)
   result= minValue+" "+minLastIndex
   return result;

}
console.log(findSallestElement([1,4,-2,11,8,1,-2,3]));
