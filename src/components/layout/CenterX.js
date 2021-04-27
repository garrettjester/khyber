import React from "react";
import "../../styles/components/CenterX.css"

const CenterX = props => {
  return (
    <div className="centerx-wrapper">
      <div className="centerx-container">
        {props.children}
        </div> 
    </div>
  )
}

export default CenterX;