import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/ballBasic.css';
import './css/ballPos1.css';
import './css/frame.css';

class App extends Component {

  constructor(props){
  super(props);
  this.state = {users: [], beans: []};
  this.fetchBeans = this.fetchBeans.bind(this);
};

componentDidMount() {
  fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
}

fetchBeans(){
  fetch('/beans')
  .then(res => res.json())
  .then(beans => this.setState({beans}));
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Users</h1>
        {this.state.users.map(user => <div key={user.id}>{user.username}</div>)}
        <div className="frame"> 
          <button className="ball ballPos1"></button>
        </div>
        <button onClick={this.fetchBeans}>fetch beans</button>
        {this.state.beans.map(bean => <div key={bean.id}>{bean.beanKind}</div>)}
      </div>
    );
  }
}

export default App;
