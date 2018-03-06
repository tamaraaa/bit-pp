var dataModule = (function () {

    var data = {
        movieList: []
    }
 
    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
 
    // Methods
    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre;
    };
 
    function addMovie(movieData) {
        var movie = new Movie(movieData.title, movieData.genre, movieData.length)
        // localStorage.setItem("movie", JSON.stringify(movie))
        data.movieList.push(movie)
 
        return movie;
    }
 
 
    return {
        createMovie: addMovie,
    }
 
    function Program(){
        this.date = new Date(date);
        this.listOfMovies = [];
        this.getNumOfMovies = function () {
            return this.listOfMovies.length;
        }
   
    }
    Program.prototype.getData = function () {
        var programLength = 0;
        var movieList = "";
    }

 })();