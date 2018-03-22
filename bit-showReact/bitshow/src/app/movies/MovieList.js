import React, { Component } from 'react';
import {MovieItem} from './MovieItem'
import {fetchService} from '../../services/fetchService'

export const MovieList = (props) => {
    const shows = props.shows
    console.log(shows)
    return (
      shows.map((show) => <MovieItem name={show.title} img={show.img} summary={show.summary} key={show.id} />)
    )
  }