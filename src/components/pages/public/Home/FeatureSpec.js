import React from "react"
import Fade from "react-reveal/Fade";

const FeatureSpec = props => {

  const renderIcon = () => {
    if (props.icon) {
      return(
        <img className="feature-spec__icon" src={props.icon} alt="Product symbol"/>
      )
    } else {
      return
    }
    
  }

  return (
    <div
      className="feature-spec-box"
    >
      <Fade bottom delay={props.index !== 0 ? 500 : 300}>
        <div>
        {renderIcon()}
        </div>

        <h3 style={(props.type==='light') ? {color: 'white'} : {}} className="feature-spec__title">{props.title}</h3>
        <h3 style={(props.type==='light') ? {borderLeft: 'solid #464646', borderLeftWidth: '0.5px'} : {}} className="feature-spec__description">
          {props.description}
        </h3>
      </Fade>
    </div>
  );
};


export default FeatureSpec;