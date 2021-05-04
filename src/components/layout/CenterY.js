import React from "react"
import "../../styles/components/CenterY.css"

const CenterY = (props) => {
  return (
    <div style={props.style} className="outer">
      <div className="middle">
        <div style={{width: props.width || '100%', height: props.height || 'auto'}} className="inner">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default CenterY; 