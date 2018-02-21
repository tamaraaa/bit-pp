"strict mode";

(function () {


    function Product(name, price, expirationDate) {
        this.id = (function () {
            return Math.floor(Math.random() * (99999 - 10000) + 10000);
        })();
        this.PrvoIzadnje = function () {
            var firstLetter = this.name.charAt(0);
            var LastLetter = this.name.charAt(this.name.length - 1)
            var result = firstLetter + LastLetter
            return result.toUpperCase();
        }

        this.name = name;
        this.price = price.toFixed(2);
        this.date = new Date(expirationDate);
        this.getInfo = function () {
            return this.PrvoIzadnje() + this.id + " " + this.name + " " + this.price;
        }
    }

    
    
    
    function ShopingBag() {
        this.list = [];
        this.addProduct = function (product) {
            if (product.date > new Date()) {
                return this.list.push(product);
            }
            return "Expiration date expired."
        }
    }
    
    var banana = new Product("banana", 100.23, "August 19, 2975 23:15:30")
    var sb = new ShopingBag();
    console.log(sb.addProduct(banana));

    console.log(sb.addProduct(banana,));
    console.log(sb.addProduct(banana));
    console.log(banana.getInfo());
    console.log(sb.list);
    
    

})();