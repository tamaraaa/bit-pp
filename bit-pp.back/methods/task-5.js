(function () {

    function Product(name, price) {
        this.name = name;
        this.price = price;
        

    }
    var jabuka = new Product("apple", 100);
    console.log(jabuka);

    var milk = new Product("milk",80);
    console.log(milk);

    var banana = new Product("banana",150);
    console.log(banana);

    function calcPrice() {
        return banana.price + milk.price+ jabuka.price
    }
    console.log(calcPrice())

    function avragePrice() {
        return (banana.price + milk.price+ jabuka.price)/3
    }
    console.log(avragePrice())
})();