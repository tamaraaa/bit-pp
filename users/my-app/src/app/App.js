import React from 'react';
import {Header} from './partials/Header';
import UserItem from './users/UserItem';
import UserList from './users/UserList';
import { userService } from '../service/UserService';
import './style.css'

class App extends React.Component {
    state = {users: [], view :'list'}

fetchUsers = () => {
    userService.fetchUsers()
    .then((userList) => {
      this.setState({ users: userList })
    })
}

componentDidMount() {
   this.fetchUsers()
  }
 
toggleView = (view) => {
     this.setState({view})
}
reloadUsers = () => {
    this.fetchUsers()
}

render() {
    return (
      <React.Fragment>
        <Header toggleView={this.toggleView} view={this.state.view} reloadUsers={this.reloadUsers}/>
        <div className="container">
          <UserList users={this.state.users} view={this.state.view} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;