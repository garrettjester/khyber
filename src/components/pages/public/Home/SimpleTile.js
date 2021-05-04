import React from "react";
import Fade from "react-reveal/Fade";
import "../../../../styles/pages/Home/BrowserTile.css";
import FeatureSpec from "./FeatureSpec";
import Scaffold from "../../../layout/Scaffold";
import inventoryIcon from "../../../../white-inventory.svg";
import dealIcon from "../../../../white-deal-automation.svg";
import crmIcon from "../../../../white-crm.svg";

const details = [
  {
    icon: inventoryIcon,
    title: "Inventory",
    description:
      "A first-ever connected inventory system eliminates the need for manual entry.",
  },
  {
    icon: crmIcon,
    title: "CRM",
    description:
      "Dead simple CRM allows sales to identify and target the most promising leads.",
  },
  {
    icon: dealIcon,
    title: "Deal automation",
    description:
      "A step-by-step deal process maximizes efficiency and prevents costly mistakes.",
  },
];

const SimpleTile = props => {
  const renderColumns = () => {
    return details.map((detail) => {
      return (
        <FeatureSpec
          type="light"
          title={detail.title}
          description={detail.description}
          icon={detail.icon}
        />
      );
    });
  };

  return (
    <Scaffold style={{ background: "black" }}>
      <Fade bottom>
        <div id={props.id} className="overview__container">
          <h1
            id="overview-title"
            style={{ color: "white"}}
            className="standout-title"
          >
            An integrated toolkit.
          </h1>
          <div style={{ color: "white" }} className="full-width-grid">
            {renderColumns()}
          </div>
        </div>
      </Fade>
    </Scaffold>
  );

  /**
   * <div style={{width: '100%', height : 'auto'}}>
       
      <Fade bottom>
        <div style={{display: 'block', width: '50%', height: 'auto', paddingTop: '50px', }}>
        <img src={integratedIcon} alt="Trend icon" className="inventory-icon"/>
        <h3 className="caps-light">INTEGRATED PRODUCTS</h3>
        <h1 className="standout-title">An intelligent toolkit.</h1>
        <p  className="standard-text">
          Khyber is an integrated hub of tools designed to replace a traditional desktop-based DMS. Our products empower your team to spend more time with customers and less time in front of the computer.
        </p>
        </div>
       
      </Fade>
    </div>
   */
};

export default SimpleTile;
