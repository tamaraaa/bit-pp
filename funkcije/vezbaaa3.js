var t = "tamara";

function concAStr(str, num) {
    if(typeof num === "undefined"){
        return str;
    }
    else{
        var sum ="";
        for(var i = 0;i<num;i++){
           sum+= str;
        }
    }
    return sum;
}
var result = concAStr(t,7);
console.log(result);