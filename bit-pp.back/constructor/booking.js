//"use strict";
(function(){

function Country (name,odds,continent){
    this.name = name;
    this.odds = odds;
    this.continent = "EU" || "AS" || "SA" || "NA" || "AU";

    }

function Person (name,surname,dateOBirth) {
    this.name= name;
    this.surname = surname;
    this.dateOBirth = new Date(dateOBirth);
    this.getInfo = function (){
        return this.name + " "+ this.surname+ " "+ this.dateOBirth;
    }


}
function Player (person,betAmount,country){
    this.person =  person;
    this.betAmount = betAmount;
    this.country = country;
    this.getInfo = function(){
        return this.country.substring(0,2).toUpperCase()+", "+(Country.odds*this.betAmount)+"eur,"+ this.person.getInfo();
    }
}
function Address (country,city,postalCode,streetAndNum){
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.streetAndNum = streetAndNum;
    this.getInfo = function (){
        return this.streetAndNum +", " +this.postalCode+" "+this.city+ ", "+this.country.substring(0,2).toUpperCase();
    }
}
function BettingPlace (address){
    this.address = address;
    this.listOfPlayers = [];
}
function BettingHouse(competition,numOfPlayers){
    this.competition = competition;
    this.numOfPlayers = numOfPlayers;
    this. listOfBettingPlaces = []
}

var person1 = new Person ("Tamara","Milosavljevic", "06 06 1989");
console.log(person1.getInfo());
var address = new Address("Srbija","Beograd",11000,"Mutapova 31");
console.log(address.getInfo());
var player = new Player(person1,200,"Srbija");
console.log(player.getInfo());
var country1= new Country("Serbija",1.8,"EU");
console.log(country1.odds);




})();