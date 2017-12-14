import React, { Component } from 'react';
import * as u from '../utilsLoader';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export class  Ball extends Component {

    render() {

            let newPos = this.props.ballPos;
            let color = 'error';
            let waitTimer = {};

            const completeMove = (msg) => {
                newPos = u.moveBall(this.props.ballPos);
                newPos.blocked = false;
                this.props.setBallState(newPos);
                let theDate = window.Date();
                this.props.logMsg({id: theDate, msg: msg});  
            }

            const moveBall = () => {   
                if(!this.props.ballPos.blocked){
                    newPos.blocked = true;
                    this.props.setBallState(newPos);
                    this.props.logMsg({id: Date.now(), msg: 'Ball clicked. Wait till operation completion'});
                    //color = u.fetchColor(this.props.ballPos, this.props.setBallState, color);
                    let msg = '';
                    if (color != 'error') { 
                        msg = 'Operation completed. You may continue'
                    } else { 
                        msg = 'Color read failed. Ball moved with the same color. You may continue.';  
                    } 
                    waitTimer = setTimeout(()=> {completeMove(msg)}, 5000);
                };
            }

            let classPos = u.buildClassString(newPos, this.props.mode, 'ball')+' ';

            return (
                    <ReactCSSTransitionGroup transitionName="anim" transitionEnterTimeout = {5000} transitionLeaveTimeout = {500} transitionEnter={true} transitionLeave={false}>
                        <div className={classPos} onClick={moveBall}></div>
                    
                    </ReactCSSTransitionGroup>

            );
    }
};