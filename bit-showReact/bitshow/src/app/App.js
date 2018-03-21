import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Header } from './partials/Header';
import {Footer} from './partials/Footer'
import {MovieList} from './movies/MovieList'

const movies = ["Superman", "Batman", "Hulk"]





const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <MovieList data={movies} />
      <Footer />
    </React.Fragment>
  )
}

export default App;
