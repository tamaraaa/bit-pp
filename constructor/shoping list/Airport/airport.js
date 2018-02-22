"use strict";
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return name + " " + surname 
            
        }
    }

    function Seat(number, category) {
        this.number = number || Math.floor((Math.random() * (100 - 10) + 1) + 10);
        this.category = category || "E";
        this.getData = function (){
            return this.number + ", " + this.category;
        }


    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;


    }

    // var p = new Person();
    // var s = new Seat();
    // var pass = new Passenger(p, s);

    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPasenger = [];
        this.getData= function (){
            return this.date + " " + this.relation
        }
    }

    function Airport(name, listOfFlight) {
        this.name = "Nikola Tesla";
        this.listOfFlight = listOfFlight;
    }
    var b = new Seat(null, "A");
    console.log(b.getData());
    var a = new Flight ("Belgrade - Paris","25.09.2017")
    console.log(a.getData());
    var c = new Person ("John", "Snow")
    console.log(c.getData());
    

})();