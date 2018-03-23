import React, { Component } from 'react';
import { Link } from "react-router-dom";

const ListItem = () => {
    return (
        <div className="card">
            <Link to="/postDetailsPage"><h1>Title 1</h1></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias fuga laborum ducimus ex earum ab temporibus,
                praesentium voluptate incidunt ipsa pariatur consectetur
                veniam eos adipisci nisi error at vitae aliquid.</p>
            <hr/>
        </div>
    )
}

export default ListItem;