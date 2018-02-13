"use strict"
function culculateSupply (age,amount,favCandy){
var result=(age* amount * 365)/1000;
return console.log("You will need "+result+ "kg "+ favCandy + " to last you until the ripe old age of " + age);

}
culculateSupply (100,10,"chocolate");
