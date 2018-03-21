import React, { Component } from 'react';
import {MovieItem} from './MovieItem'

export const MovieList = (props) => {
    const movie = props.data
    console.log(movie);
    
    
    return (
     movie.map((element,index)=><MovieItem name={element} key={index}/>)
    )
  }