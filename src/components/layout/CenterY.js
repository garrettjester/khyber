import React from "react"
import "../../styles/components/CenterY.css"

const CenterY = (props) => {
  return (
    <div className="outer">
      <div className="middle">
        <div style={{width: props.width || '100%'}} className="inner">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default CenterY; 