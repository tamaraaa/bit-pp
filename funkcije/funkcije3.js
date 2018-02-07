var t = [3,4,3,2,4,5,3];
function calc (arr,num){
   var counter= 0;
   for(var i =0;i<t.length;i++){
       if(arr[i]=== num){
           counter++;
       }
   }
   return console.log(counter);
}
calc(t,3);

