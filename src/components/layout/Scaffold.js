import React from "react";
import "../../styles/components/Scaffold.css"

const Scaffold = props => {
  return (
    <div style={props.style} className="scaffold">
      <div className="scaffold__left-gutter"></div>
      <div className="scaffold__content">
        {props.children}
      </div>
      <div className="scaffold__right-gutter"></div>
    </div>
  );
};

export default Scaffold
