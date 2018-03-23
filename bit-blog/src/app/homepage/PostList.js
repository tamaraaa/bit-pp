import React, { Component } from 'react';
import ListItem from './ListItem'


export class PostList extends Component {
    render(){
        return (
            <div className="container">
            <h1>POSTS</h1>
            <ListItem />
            </div>
        )
    }
}