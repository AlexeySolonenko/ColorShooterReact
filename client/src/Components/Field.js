import React, { Component } from 'react';
import * as u from '../utilsLoader';

export class Field extends Component {
    render(){
        let className = u.buildClassString(this.props.ballPos, this.props.mode, 'field');
        return(
            <div className={className}> 
                {this.props.children}
            </div>
        );
    }
}