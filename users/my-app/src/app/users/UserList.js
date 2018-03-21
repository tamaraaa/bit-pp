import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem';
import UserCard from './UserCard'

const UserList = ({users,view}) => {
    

    const renderUsers = () => {
        if(view === 'list') return users.map((user, index) => <UserItem key={index} user={user} />)
    
        else return users.map((user, index) => <UserCard key={index} user={user} />) 
    }

    return (
        <ul className="collection">
            {renderUsers()}
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList