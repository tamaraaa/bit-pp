import React, { Component } from 'react';

export const MovieItem = (props) => {
    const movie = props.name
    console.log(movie);
    
    return (
      <div className="container">
        <div className="card" style={{ width: 18 + 'rem' }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{movie}</p>
          </div>
        </div>
      </div>
    )
  }