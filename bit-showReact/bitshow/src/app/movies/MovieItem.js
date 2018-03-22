import React, { Component } from 'react';
// import {fetchService} from '../services/fetchService'
// import {MovieList} from './movies/MovieList'

export const MovieItem = (props) => {
    const movie = props.name
    const picture = props.img
    // console.log(movie);
    
    return (
      
     
      
        <div className="card">
           <img className="card-img-top" src={picture} alt="Card image cap" /> 
          <div className="card-body">
            <p className="card-text">{movie}</p>
          </div>
      </div>
        
      
    )
  }