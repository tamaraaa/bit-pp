import React, { Component } from 'react';
import {PostDetails} from './PostDetails'
import {MorePosts} from './MorePosts'
import { Link } from "react-router-dom";



export class PostDetailsPage extends Component {
    render() {
        return (
            <div className="container">
                <Link to='../homepage/PostList'>Back</Link>
                 <PostDetails/> 
                 <MorePosts/>
            </div>
        )
    }
}

