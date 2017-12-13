import React, { Component } from 'react';
import './_css_collector';
import * as u from './utilsLoader';
import { positionProps } from './consts/positionProps';
import * as e from './elemLoader';
import * as c from './compLoader';


class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    ballPos: { id: 2, name: 'bottomRight', blocked: false },
    positioningMode: 'flex'
  };
  this.changeMode = this.changeMode.bind(this);
  this.setBallState = this.setBallState.bind(this);
};
changeMode(event) { this.setState({ positioningMode: event.target.value }); };
setBallState(pos){ this.setState({ ballPos: pos }); };


  render() {

    return (
        <div>
          <c.MainWrapper>
                <c.Field ballPos={this.state.ballPos} mode={this.state.positioningMode}>
                  <e.Ball setBallState={this.setBallState} ballPos={this.state.ballPos} mode={this.state.positioningMode}/>
                </c.Field>
          </c.MainWrapper>
          <div className="controls-container" >
                <e.ModeSelector mode={this.state.positioningMode} reactCallBack={this.changeMode} />
          </div>
      </div>
    );
  }
}

export default App;
