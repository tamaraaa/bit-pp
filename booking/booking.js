"use strict";
(function () {
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    var continent = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AUSTRALIA: "AU",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA"
    })
   

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.date = new Date(dateOfBirth);
    }
    Person.prototype.getInfo = function (){
        return this.name + " "+ this.surname;
    }

   
    function Player (person,betAmount,country){
       this.person = person;
       this.betAmount = betAmount;
       this.country = country;

    }
  

    function Address (country,city,postalCode,streetAndNum){
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNum = streetAndNum;
    }

   
    function BettingPlace (address){
    this.address = address;
    this.listOfPlayers = [];
    }

   
    function BettingHouse (competition,numOfPlayers){
        this.competition = competition;
        this.listOfBetingPlaces =[];
        this.numOfPlayers = numOfPlayers;
    }

    var bh = new BettingHouse()
    
    


    var Srbija = new Country("Serbia", 1.8, continent.EUROPE);
    // console.log(Srbija);

    var person = new Person ("Tamara","Milosavljevic","06 06 1989");
    console.log(person.getInfo());
    
    var player = new Player(person,200,Srbija);
    console.log(player);
    

    var address = new Address (Srbija,"Beograd",11000,"Mutapova 31")
    console.log(address);

    var bp = new BettingPlace (address);
    console.log(bp);











})();