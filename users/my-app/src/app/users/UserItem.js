import React from 'react'

const UserItem = (props) => {
    const { user } = props;

    if(!user) {
        return <h3>Nothing here</h3>
    }

    return (
        <li className="collection-item avatar">
            <img src={user.photo} alt="" className="circle" />
            <span className="title">{user.firstName}</span>
            <p>{user.email}</p>
            <p>{user.birthday}</p>
        </li>
    )
}

export default UserItem