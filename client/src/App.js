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
  this.fetchColor = this.fetchColor.bind(this);
};


fetchBeans(){
  fetch('/beans')
  .then(res => res.json())
  .then(beans => this.setState({beans}));
}

fetchColor() {
  let reqBody = JSON.stringify({"jsonrpc":"2.0","method":"generateIntegers","params":{"apiKey":"00000000-0000-0000-0000-000000000000","n":10,"min":1,"max":16777215,"replacement":true,"base":16},"id":12830});

  fetch('https://api.random.org/json-rpc/1/invoke',{
    method: "POST",
    body: reqBody
  })
  .then( (res) => {
    res.json().then( (res) => {
      console.log(res);
    });
    })
  .then( (res) => {
    console.log(res);
  })
  .catch(err => {
    console.log('Error');
    console.log(err)
  });
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
 
      
        <div className="frame"> 
          <button className="ball ballPos1"></button>
        </div>
        <button onClick={this.fetchBeans}>fetch beans</button>
        {this.state.beans.map(bean => <div key={bean.id}>{bean.beanKind}</div>)}
        <button onClick={this.fetchColor}>fetch Color</button>
      </div>
    );
  }
}

export default App;
