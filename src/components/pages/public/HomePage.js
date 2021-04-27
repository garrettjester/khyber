import React from "react";
import { Typography, Button } from "antd";
import "../../../styles/pages/HomePage.css";
import showroom from "../../../dealership-sketch.png";
import history from "../../../utils/history";
import CenterY from "../../layout/CenterY";
import SiteFooter from "../../App/SiteFooter";

const HomePage = () => {
  return (
    <div className="fullscreen-wrapper">
      <div className="duo-tile">
      <div className="duo-element">
        <CenterY>
          <div className="homepage__text-block">
            <h1 className={"homepage__landing-title"}>
              A smart hub for dealership operations
            </h1>
            <h2 className="homepage__landing-subtitle">
              Khyber offers browser-based applications that integrate with your
              manufacturer's distribution system, allowing you to effortlessly
              manage customers, inventory, and the deal process.
            </h2>
            <div style={{ marginTop: "30px" }}>
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
        </CenterY>
      </div>

      <div style={{ overflow: "hidden" }} className="duo-element hidden-mobile">
        <img
          className="dealership-sketch hidden-mobile"
          src={showroom}
          alt="Sketched outline of a modern car dealership"
        />
      </div>
    </div>
    <SiteFooter/>
    </div>
    
  );
};

export default HomePage;
