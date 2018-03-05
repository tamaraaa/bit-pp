
var model = (function(){
    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        console.log(this);
    }
    Movie.prototype.getData = function () {
        return this.title + ", " + this.genre + ", " + this.length + "min";
    }
      
  return Movie;


})();
var view = (function(Movie){
    function createMovie() {
        var title = document.querySelector("#movie").value;
        var length = document.querySelector("#length").value;
        var objSelect = document.getElementById("drop-list");
        var selectedOption = objSelect.options[objSelect.selectedIndex];
        var genre = selectedOption.value
        var parag = document.createElement("p");
        var parent = document.querySelector("#bla");
        
       
        
        var movie = new Movie(title, genre, length);
       
        parag.innerHTML = movie.getData();
        parent.appendChild(parag);
        
    }

 return createMovie
})(model);

var controller = (function(){
    document.querySelector("#create-movie").addEventListener("click", function (event) {
        view();
    });


})();
