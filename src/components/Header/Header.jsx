import React from 'react'
import "./Header.css"

export default props => {
    return (
        <header className="homeHeader">
            <div>
              <img className="imgLogo" src={props.logoSrc} />
            </div>
        </header>
    )
}