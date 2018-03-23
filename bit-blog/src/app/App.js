import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"


import './App.css';
import {Header} from './partials/Header'
import {Footer} from './partials/Footer'
import {PostDetailsPage} from './postDetails/PostDetailsPage'
import {PostList} from './homepage/PostList'

class App extends Component {
  render() {
    return (
     <div>
       <Header/>
       <Switch>
          <Route exact path='/postDetailsPage' component={PostDetailsPage} />
          <Route exact path='/homepage/PostList' component={PostList} />
          
       </Switch>
       <Footer/> 
       </div>
    );
  }
}

export default App;
