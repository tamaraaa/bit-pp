import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class PostDetails extends Component {
    render(){
        return(
            <div>
            <h1>Post title 1</h1>
            <Link to='#'>Author Name</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias fuga laborum ducimus ex earum ab temporibus,
                praesentium voluptate incidunt ipsa pariatur consectetur
                veniam eos adipisci nisi error at vitae aliquid.</p>
            </div>
        )
    }
}