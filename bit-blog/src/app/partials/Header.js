import React, { Component } from 'react';


export const Header = () => {
  return (<div className="container head">

    <ul className="nav justify-content-end">

      <li className="nav-item">
        <a className="nav-link navItems" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navItems" href="#">Authors</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link active navItems" href="#">About</a>
      </li>
    </ul>
  </div>
  )
}