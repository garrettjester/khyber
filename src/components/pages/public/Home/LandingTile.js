import React from "react";
import showroom from "../../../../dealership-sketch.png";

import "../../../../styles/pages/Home/HomePage.css";
import history from "../../../../utils/history";
import { Button } from "antd";
import BounceArrow from "../../../App/BounceArrow";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";
import Scaffold from "@khyberlabs/khyberkit.scaffold";
import CenterY from "@khyberlabs/khyberkit.center-y"

const LandingTile = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const renderTextBox = () => {
    return (
      <div style={isMobile ? { padding: "0px 40px 40px 40px" } : {}}>
        <Fade bottom>
          <h1 className={"standout-title"}>
            Central command for your dealership
          </h1>
          <p
            style={{ color: "gray", paddingLeft: "0px", paddingTop: '0px', border: 'none' }}
            className="feature-spec__description"
          >
            Khyber offers browser-based applications that integrate with your
            manufacturer's distribution system, allowing you to effortlessly
            manage customers, inventory, and the deal process.
          </p>
        </Fade>

        <div style={isMobile ? { marginTop: "0px" } : { marginTop: "30px" }}>
          <Button
            onClick={() => {
              history.push("/products");
            }}
          >
            View Products
          </Button>
          <Button
            onClick={() => {
              history.push("/register");
            }}
            style={{ marginLeft: "15px" }}
            type="primary"
          >
            Get Started
          </Button>
        </div>
      </div>
    );
  };

  if (isMobile) {
    console.log("HELLO");
    return (
      <div className="fullscreen-tile">
        <CenterY>{renderTextBox()}</CenterY>
        <BounceArrow />
      </div>
    );
  }

  return (
    <div className="fullscreen-wrapper">
      <div className="fullscreen-tile">
        <Scaffold style={{ height: "100%" }}>
          <div className="duo-tile">
            <div style={{ height: "100%" }} className="duo-element">
              <CenterY>
                <div
                  style={{ marginBottom: "80px" }}
                  className="left-aligned__text-block"
                >
                  {renderTextBox()}
                </div>
              </CenterY>
            </div>
            <div
              id="centered-landing-image"
              style={{ overflow: "visible"}}
              className="duo-element hidden-mobile"
            >
  
                <img
                  className="dealership-sketch hidden-mobile"
                  src={showroom}
                  alt="Sketched outline of a modern car dealership"
                />
              </div>

          </div>
          <BounceArrow />
        </Scaffold>
      </div>
    </div>
  );
};

export default LandingTile;
