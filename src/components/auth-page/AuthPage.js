import React from "react";
import CenterY from "@khyberlabs/khyberkit.center-y";
import BoxElement from "@khyberlabs/khyberkit.box-element";
import StaticLogo from "@khyberlabs/khyberkit.static-logo";
import { useMediaQuery } from "react-responsive";
import Div100vh from "react-div-100vh";

import "./AuthPage.css";

const AuthPage = ({
  logo, 
  style, 
  children, 
  onLogoClick 
}) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  if (isMobile) {
    return (
      <Div100vh style={style}>
        <Logo logo={logo} onLogoClick={onLogoClick}/>
        <CenterY>{children}</CenterY>
      </Div100vh>
    );
  } else {
    return (
      <Div100vh style={style}>
        <Logo logo={logo} onLogoClick={onLogoClick}/>
        <CenterY width="400px">
          <div>
            <BoxElement>{children}</BoxElement>
          </div>
        </CenterY>
      </Div100vh>
    );
  }
};


const Logo = ({logo, onLogoClick}) => {
  return (
    <StaticLogo
    logo={logo}
    onClick={onLogoClick}
    />
  )
}

export default AuthPage;
