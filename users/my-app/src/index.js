import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import {usersData} from './entities/users.js'
import {Users}  from '../users/Users'
ReactDOM.render(<App data={usersData}/>, document.getElementById('root'));
registerServiceWorker();
