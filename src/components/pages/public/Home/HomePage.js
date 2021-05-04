import React from "react";
import "../../../../styles/pages/Home/HomePage.css";
import SiteFooter from "../../../App/SiteFooter";
import InventoryTile from "./InventoryTile";
import {useMediaQuery} from "react-responsive"
import LandingTile from "./LandingTile";
import SimpleTile from "./SimpleTile";

const HomePage = () => {

  const isHandheld= useMediaQuery({maxWidth: 400})

  if (isHandheld) {
    return (
      <div style={{
        height: '100%', 
        width: '100%', 
        overflow: 'scroll', 
        scrollSnapType: 'y proximity'}}>
          <LandingTile/>
          <SimpleTile id="about"/>
          <InventoryTile/>
          <SiteFooter/>
      </div>
    )
  }

  return (
    <div style={{height: '100%', width: '100%'}}>
      <LandingTile />
      <SimpleTile id="about"/>
      <InventoryTile />
      <SiteFooter />
    </div>
  );
};

export default HomePage;
