import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './partials/Header'
import {Footer} from './partials/Footer'
import {Users}  from '../users/Users'

const Main = (props) => {
  const { dataMain } = props
  console.log(dataMain)
  return (
    
      <div className="container"> <ul className="collection">
          {
              dataMain.map((user,index) => {
                  return <User dataUser={user} key={index} />
              })
          }

      </ul>
      </div>
  )
}








const App = (props) => {
  // const { data } = props
  console.log(props.data);
  
  return (
      <div>
          <Header />
          <Main dataMain={props.data} />
          <Footer />
      </div>

  )
}


export default App;
