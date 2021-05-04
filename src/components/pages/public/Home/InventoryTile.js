import React from "react";
import Fade from "react-reveal/Fade";
import "../../../../styles/pages/Home/InventoryTile.css";
import CenterY from "../../../layout/CenterY";
import inventoryMockup from "../../../../InventoryMockup.svg";
import Zoom from "react-reveal/Zoom";
import { useMediaQuery } from "react-responsive";
import inventoryIcon from "../../../../inventoryIcon.svg";
import FeatureSpec from "./FeatureSpec";
import Scaffold from "../../../layout/Scaffold";

const featureList = [
  {
    title: "One source of truth",
    description:
      "Khyber eliminates the worry of duplicate entry, ensuring your inventory is always accurate.",
  },
  {
    title: "Connected",
    description:
      "Search our dealer network for vehicles and initiate paperless dealer swaps.",
  },
];

const InventoryTile = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const renderFeatureSpecs = () => {
    return featureList.map((feature, index) => {
      return (
        <FeatureSpec
          index={index}
          title={feature.title}
          description={feature.description}
        />
      );
    });
  };

  const renderContent = () => {
    return (
      <Fade duration={1000} bottom>
        <img
          src={inventoryIcon}
          alt="Inventory icon"
          className="inventory-icon"
        />
        <h3 className="caps-light">SMART INVENTORY MANAGEMENT</h3>
        <h1 className="standout-title">Never log inventory again.</h1>
        <p className="standard-text">
          Khyber connects to your manufacturer and automatically syncs your
          inventory when vehicles arrive.
        </p>
        <div className="specs-grid">{renderFeatureSpecs()}</div>
      </Fade>
    );
  };

  if (isMobile) {
    return <div className="mobile-top-snappable">{renderContent()}</div>;
  }

  return (
    <div className="fullscreen-tile">
      <Scaffold style={{ height: "100%" }}>
        <CenterY style={{height: '100%'}}>
        <div style={{margin: '0px', display: "flex", flexDirection: "row", width: "100%", height: '100%'}}>
          <div style={{ flex: '50%' }}>
            <div>
              {renderContent()}
            </div>
          </div>
          <div style={{ flex: '50%', overflowX: "visible"}}>
            <Zoom>
              <div style={{position: 'relative', marginLeft: '80px', height: '100%'}}>
              <img
                  
                  id="inventory-interface"
                      src={inventoryMockup}
                  alt="A mockup of the Khyber inventory interface."
                />
                
              </div>  

            </Zoom>
          </div>
        </div>

        </CenterY>
        
      </Scaffold>
    </div>
  );
};

export default InventoryTile;
