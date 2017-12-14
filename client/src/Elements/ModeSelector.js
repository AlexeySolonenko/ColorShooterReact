import React from 'react';

export const ModeSelector = (props) => {

    const handleOnChange = (event) => {
        props.reactCallBack(event);
        props.logMsg({id: Date.now(), msg: "Mode changed to: "+event.target.value});
    }

    return (
        <select className="controls-container" value={props.mode} onChange={handleOnChange}>
            <option value="abs">Absolute positioning mode</option>
            <option value="flex">Flex-box positioning</option>
        </select>
    )
}