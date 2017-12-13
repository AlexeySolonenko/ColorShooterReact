import React from 'react';
import * as u from '../utilsLoader';
import { moveBall } from '../Utils/moveBall';


export const Ball = (props) => {
    let newPos = props.ballPos;
    let classState = '';
    props.ballPos.blocked ? (classState = ' disabled') : (classState = ' ');
    
    let color = ' blue';
    //color = u.fetchColor(props.ballPos, props.setBallState, color);

    const moveBall = () => {
        color = u.fetchColor(props.ballPos, props.setBallState, color);

        newPos = u.moveBall(props.ballPos);
        props.setBallState(newPos);
    }
    console.log(color);
    let classPos = u.buildClassString(newPos, props.mode, 'ball')+' ';

    console.log(props.ballPos.blocked);
    return (
        <div className={classPos + classState} onClick={moveBall}>
        </div>
    );
}