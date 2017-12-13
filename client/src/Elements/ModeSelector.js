import React from 'react';

export const ModeSelector = (props) => {
    return (
        <select value={props.mode} onChange={(event=>props.reactCallBack(event))}>
            <option value="abs">Absolute positioning mode</option>
            <option value="flex">Flex-box positioning</option>
        </select>
    )
}