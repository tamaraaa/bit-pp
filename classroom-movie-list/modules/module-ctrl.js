var ctrlModule = (function (dataCtrl, uiCtrl) {
 
    // 1. Event handler
    document.querySelector(uiCtrl.DOMStrings.createMovieButton).addEventListener('click', function (event) {
 
        // 2. trigger getFormData() from uiModule
        var formMovie = uiCtrl.collectFormInput()
 
        // 3. Add movie to list
        var movieInstance = dataCtrl.createMovie(formMovie);
 
        // 4. Show movie data
        console.log(movieInstance);
        uiCtrl.showMovieData(movieInstance)
 
 
        // add collected movie to list of movies
    })
 
 })(dataModule, uiModule);
 