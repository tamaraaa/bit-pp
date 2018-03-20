import React from 'react';
import {Header} from './partials/Header';
import UserItem from './users/UserItem';
import UserList from './users/UserList';
import { userService } from '../service/UserService';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    userService.fetchUsers()
      .then((userList) => {
        this.setState({ users: userList })
      })
  }

  render() {
    console.log("render");
    return (
      <React.Fragment>
        <Header title="React users" />
        <div className="container">
          <UserList users={this.state.users} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;