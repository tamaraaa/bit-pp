var uiModule = (function () {
 
    var DOMSelectors = {
        movieTitleElement: ".movie-title",
        movieGenreElement: ".genre-select",
        createMovieButton: ".create-movie"
    }
 
    function getFormData() {
        var titleElement = document.querySelector(DOMSelectors.movieTitleElement)
        var lengthElement = document.querySelector(".movie-length")
        var genreSelectElement = document.querySelector(DOMSelectors.movieGenreElement)
 
        var title = titleElement.value;
        var length = parseInt(lengthElement.value);
        var genre = genreSelectElement.options[genreSelectElement.selectedIndex].value
 
        var formInputObj = {
            title: title,
            length: length,
            genre: genre
        }
 
        return formInputObj;
    }
 
    function showMovieData(movie) {
        console.log(movie.getData());
 
    }
 
 
    return {
        collectFormInput: getFormData,
        DOMStrings: DOMSelectors,
        showMovieData: showMovieData
    }
 
 })();