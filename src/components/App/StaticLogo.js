import React from "react";
import setupLogo from "../../setup-logo.svg";
import "../../styles/components/StaticLogo.css"
import history from "../../utils/history";

// The logo shown at the top of the Login and DealerSetup pages.

const StaticLogo = props => {
  return (
    <div
      style={props.style}
      className="static-logo__container"
      onClick={() => {
        history.push("/");
      }}
    >
      <img src={setupLogo} alt="Khyber F1 Logo" className="static-logo"></img>
    </div>
  );
};

export default StaticLogo;