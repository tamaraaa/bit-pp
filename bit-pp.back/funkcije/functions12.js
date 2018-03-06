function numOfDig (num){
    var xyz = String(num);
    var result =[];
    for(var i = 0;i<xyz.length;i++){
        result[i] = xyz[i];
 
       
    } 
    return result;
}
var result=numOfDig(666);
console.log(result);