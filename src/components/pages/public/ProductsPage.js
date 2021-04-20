import React from "react";

import "../../../styles/pages/ProductsPage.css";
import AppHeader from "../../App/AppHeader";
import { Divider, Typography, Button } from "antd";
import history from "../../../utils/history";
import productLogo1 from "../../../F1.png";
import productLogo2 from "../../../Daytona.png";
import { NavLink } from "react-router-dom";
import f1car from "../../../f1-car.png";
import daytonaCar from "../../../daytona-car.png";

const { Text } = Typography;

let loadedF1Image;

const ProductsPage = () => {
  window.onload = () => {
    loadedF1Image = document.getElementById("f1car");
  };

  return (
    <div className="products-wrapper">
      <AppHeader type="dark" />
      <div className="products-content">
        <div className="products-landing-tile">
          <div className="duo-tile">
            <div className="vertical-container">
              <div className="middle">
                <div className="duo-tile">
                  <div className="duo-element">
                    <ProductColumn
                      logo={productLogo1}
                      product="f1"
                      description="Our flagship DMS package"
                    />
                  </div>
                  <div className="duo-element">
                    <ProductColumn
                      logo={productLogo2}
                      title="Khyber Daytona"
                      product="daytona"
                      description="An intelligent deal pipeline for sales"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

const ProductColumn = (props) => {
  return (
    <div id={props.product} className="product-column-wrapper">

      <div
        className="product-branding-box"
        id={`branding-box-${props.product}`}
      >
        <img src={props.logo} className="product-logo" />
        <Text className="product-features">{props.description}</Text>
        <Button
          onClick={() => {
            history.push("/request-access");
          }}
          style={{ marginTop: "65px" }}
          disabled={props.product !== "f1"}
          type="primary"
        >
          {props.product === "f1" ? "Request Access" : "Coming Soon"}
        </Button>
      </div>
      <img
        id={(props.product === "f1") ? "formula-one" : "daytona"}
        className={(props.product === "f1") ? "f1-car" : "daytona-car"}
        alt="Formula One Car"
        src={(props.product === "f1") ? f1car : daytonaCar}
      ></img>
    </div>
  );
};

export default ProductsPage;
