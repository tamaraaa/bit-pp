import React, { Component } from 'react';
// import logo from './logo.svg';
 import '../App.css';
import { Header } from './partials/Header';
import {Footer} from './partials/Footer'
import {MovieList} from './movies/MovieList'
import {fetchService} from '../services/fetchService'
import {PageInfo} from './movies/PageInfo'

// const shows = [new Show(1, 'name', ), new Show(), new Show()]





class App extends Component {
  state = {
    shows: []
  }

  componentDidMount = () => {
    // fetch Shows
    // set shows in state
    console.log(fetchService())
    fetchService()
    .then(shows => {
     this.setState({
       shows: shows
     })
    }) 
  }

  render = () => {
    return (
      <React.Fragment>
        <Header />
       
        <MovieList shows={this.state.shows} />

        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
