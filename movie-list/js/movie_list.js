function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}
Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.length + "min";
}

document.querySelector("#create-movie").addEventListener("click", function (event) {
    createMovie();
});

var movieList = [];

function createMovie() {
    var title = document.querySelector("#movie").value;
    var length = document.querySelector("#length").value;
    var objSelect = document.getElementById("drop-list");
    var selectedOption = objSelect.options[objSelect.selectedIndex];
    var genre = selectedOption.value

    var movie = new Movie(title, genre, length);
    console.log(movie);
}
