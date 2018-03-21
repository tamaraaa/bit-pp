import React, { Component } from 'react';
import grid from '../../icons/grid.svg'
import list from '../../icons/list.svg'
import reload from '../../icons/reload.svg'

export const Header = ({toggleView,view, reloadUsers}) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>
                { view === 'list' ?
                <button onClick={ () =>toggleView('grid') }>
                    <img className="icon" src={grid}/> 
                </button> :
                <button onClick={ () =>toggleView('list') }>
                    <img className="icon" src={list}/>
                </button> }
                <button onClick={ () =>reloadUsers()}>
                    <img className="icon" src={reload}/>
                </button> 
            </div>
        </nav>
    )
  }
  