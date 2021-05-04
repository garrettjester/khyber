import React from "react";
import bounceArrow from "../../bounce-arrow.svg"
import "../../styles/components/BounceArrow.css"

const BounceArrow = props => {
  return (
    <div className="bounce-arrow-container">
      <img 
      className="arrow bounce"
      src={bounceArrow} 
      alt="A bouncy arrow to indicate vertical scrollability"/>
    </div>
  )
}

export default BounceArrow;