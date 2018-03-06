'use strict';

(function () {
   function Product(name, price, exDate) {
       this.id = Math.floor(Math.random() * (99999 - 10000)) + 10000;
       this.name = name;
       this.price = parseFloat(price.toFixed(2));
       this.date = new Date(exDate);

       this.getInfo = function () {
           var shortName = this.name[0] + this.name[this.name.length - 1];
           var code = shortName.toUpperCase().concat(this.id);
           var output = code + ", " + this.name + ", " + this.price;
           return output;
       }
   }

   function ShoppingBag() {
       this.productList = [];

       this.addProduct = function (product) {

           if (!product) {
               throw Error("Invalid call you need to import product")
           }

           if (product instanceof Product) {
               if (arguments.length === 1) {
                   this.productList.push(product);
                   return;
               }

               for (var i = 0; i < arguments.length; i++) {
                   this.productList.push(product)
               }
           }
       };
       this.getMostExpensive = function () {
           if (this.productList.length === 0) {
               return "Shopping Bag is empty";
           }

           var sortedProducts = this.productList
               .slice()
               .sort(function (currentProduct, nextProduct) {
                   return currentProduct.price - nextProduct.price;
               });
           var mostExpensiveProduct = sortedProducts[sortedProducts.length - 1];

           return mostExpensiveProduct;
       };
       this.getTotalPrice = function () {
           if (this.productList.length === 0) {
               return "Shopping Bag is empty";
           }

           var totalPrice = 0;

           this.productList.forEach(function (product) {
               totalPrice += product.price;
           });

           return totalPrice;
       }
   }

   function PaymentCard(accountBalance, validUntilDate) {
       this.accountBalance = parseFloat(accountBalance.toFixed(2));
       this.validUntilDate = new Date(validUntilDate);
       this.status = this.validUntilDate > new Date();
   }

   var banana = new Product("Banana", 123.213456, "24 Feb 2018");
   var apple = new Product("Apple", 923.213456, "24 Feb 2018");
   var orange = new Product("Orange", 23.213456, "24 Feb 2018");

   var markoSB = new ShoppingBag();
   markoSB.addProduct(banana);
   markoSB.addProduct(apple);
   markoSB.addProduct(orange);

   var visa = new PaymentCard(1700.12101, "24 Feb 2019");

   function checkoutAndBuy(paymentCard, shoppingBag) {
       if (!paymentCard.status) {
           return "Payment card is inactive.";
       }

       var accountBalance = paymentCard.accountBalance;
       var totalPriceOfProducts = shoppingBag.getTotalPrice();
       var isPurchaseValid = (accountBalance >= totalPriceOfProducts);
       console.log(totalPriceOfProducts, accountBalance);

       if (isPurchaseValid) {

           var p = paymentCard.accountBalance - totalPriceOfProducts;
           paymentCard.accountBalance = parseFloat(p.toFixed(2));
           console.log(parseFloat(paymentCard.accountBalance.toFixed(2)));

           shoppingBag.productList = [];
           return "You have successfully purchased your items!";
       } else {
           var extraAmount = totalPriceOfProducts - accountBalance;
           return "You need " + extraAmount + " more to be able to buy your items!";
       }
   }

   console.log(checkoutAndBuy(visa, markoSB));
   console.log(visa.accountBalance, markoSB.productList);
})();

