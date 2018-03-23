import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class MorePosts extends Component {
    render(){
        return(
            <div>
            <h3>3 more posts from same author</h3>
            <Link to="#">Title 10 - velit,vulputate</Link> <br/>
            <Link to="#">Title 10 - velit,vulputate</Link> <br/>
            <Link to="#">Title 10 - velit,vulputate</Link> <br/>
            </div>
        )
    }
}