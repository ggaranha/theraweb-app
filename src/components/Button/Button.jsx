import React from 'react'
import "./Button.css"

export default props => {
    var type = "Button " + props.className;
    return (
        <button className={type}>
            {props.label}
        </button>
    )
}