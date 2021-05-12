import React from 'react'

function H1(props) {
    return (
        <h1 className={`H1 ${props.className}`}>
            {props.children}
        </h1>
    )
}

export default H1;
