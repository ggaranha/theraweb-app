import React from 'react'
import "./TextButton.css"

export default props => {
    var type = "TextButton " + props.className;
    return (
        <button className={type}>
            {props.label}
        </button>
    )
}