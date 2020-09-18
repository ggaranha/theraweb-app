import React from 'react'
import "./FeatureTag.css"

export default props => {
    return (
            <div className="feature">
              <img className="featureImage" src={props.logoSrc} alt={props.alt}/>
              <div className="featureHeader">{props.featureHeader}</div>
              <div className="featureText">{props.featureText}</div>
            </div>
    )
}