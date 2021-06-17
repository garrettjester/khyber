import React from "react";
import "../../../styles/pages/ProductsPage.css";
import { Typography, Button } from "antd";
import history from "../../../utils/history";
import productLogo1 from "../../../F1.png";
import productLogo2 from "../../../Daytona.png";
import f1car from "../../../f1-car.png";
import daytonaCar from "../../../daytona-car.png";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import Footer from "../../App/Footer";
import { useMediaQuery } from "react-responsive";

const { Text } = Typography;

const ProductsPage = (props) => {

  const isMobile = useMediaQuery({ maxWidth: 800 });

  if (isMobile) {
    return (
      <div className="fullscreen-wrapper-products">
      <ProductColumn
        logo={productLogo1}
        product="f1"
        description="Our flagship DMS package"
      />
      <ProductColumn
        logo={productLogo2}
        title="Khyber Daytona"
        product="daytona"
        description="An intelligent deal pipeline for sales"
      />
      <Footer/>
    </div>
    )
  }

  return (
    <div className="fullscreen-wrapper-products">
      <div className="product-page__container">
        <div className="product-page__duo-tile">
          <div className="duo-item">
            <ProductColumn
              logo={productLogo1}
              product="f1"
              description="Our flagship DMS package"
            />
          </div>
          <div className="duo-item">
            <ProductColumn
              logo={productLogo2}
              title="Khyber Daytona"
              product="daytona"
              description="An intelligent deal pipeline for sales"
            />
          </div>
        </div>
      </div>
      <Footer/>
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
        <img
          alt={
            props.product === "f1"
              ? "Red Formula One Vehicle"
              : "Dark Car Silhouette"
          }
          src={props.logo}
          className="product-logo"
        />
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
        id={props.product === "f1" ? "formula-one" : "daytona"}
        className={props.product === "f1" ? "f1-car" : "daytona-car"}
        alt="Formula One Car"
        src={props.product === "f1" ? f1car : daytonaCar}
      ></img>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(ProductsPage);
