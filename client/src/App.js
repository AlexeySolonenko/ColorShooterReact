import React, { Component } from 'react';
import './_css_collector';
//import * as u from './utilsLoader';
import * as e from './elemLoader';
import * as c from './compLoader';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    ballPos: { id: 2, name: 'bottomRight', blocked: false },
    positioningMode: 'flex',
    log : [
      { 
          id: Date.now(),
          msg: 'Welcome to color picker app'
      }
    ]
  };
  this.changeMode = this.changeMode.bind(this);
  this.setBallState = this.setBallState.bind(this);
  this.logMsg = this.logMsg.bind(this);
};
changeMode(event) { this.setState({ positioningMode: event.target.value }); };
setBallState(pos){ this.setState({ ballPos: pos }); };
logMsg(msg) { this.setState({ log : [msg].concat(this.state.log) }); }

  render() {

    return (
        <div>
          <c.MainWrapper>
                <c.Field ballPos={this.state.ballPos} mode={this.state.positioningMode}>
                  <e.Ball setBallState={this.setBallState} ballPos={this.state.ballPos} mode={this.state.positioningMode} logMsg={this.logMsg}/>
                </c.Field>
          </c.MainWrapper>
          <e.ModeSelector mode={this.state.positioningMode} reactCallBack={this.changeMode} logMsg={this.logMsg} />
          <e.LogBar log={this.state.log}/>
      </div>
    );
  }
}

export default App;
