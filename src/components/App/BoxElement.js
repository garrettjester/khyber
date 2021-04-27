import React from "react"
import "../../styles/components/BoxElement.css"

const BoxElement = (props) => {
  return (
    <div className="box-element">
      {props.children}
    </div>
  )
};

export default BoxElement;