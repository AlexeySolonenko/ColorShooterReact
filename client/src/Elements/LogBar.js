import React from 'react';

export const LogBar = (props) => {

    return (
        <ul className="log-bar">
            {props.log.map((msg) => {
                let msgTime = new Date(msg.id);
                msgTime = msgTime.toString().split(" ").slice(1,5).join(" ");
                return(
                    <li key={msg.id}>
                        {msgTime} || {msg.msg}
                    </li>
                );
            })}
        </ul>
    );
};