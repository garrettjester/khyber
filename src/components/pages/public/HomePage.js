import React from "react";
import { Typography, Button } from "antd";
import logo from "../../../khyber.svg";
import AppHeader from "../../App/AppHeader";
import SiteFooter from "../../App/SiteFooter";
import "../../../styles/pages/HomePage.css";
import showroom from "../../../dealership-sketch.png"
import history from "../../../utils/history";

const { Title } = Typography;

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <AppHeader />
      <div className="homepage-content">
        <div className="homepage-landing-tile">
          <div className="duo-tile">
            <div className="duo-element">
              <div className="vertical-container">
                <div className="middle">
                  <div className="inner">
                    <h1 className={"landing-title"}>
                      A centralized hub for dealership operations
                    </h1>
                    <h2 className="landing-subtitle">
                      Khyber offers browser-based applications that integrate with your manufacturer's distribution system, allowing you to effortlessly manage customers, inventory, and the deal process. 
                    </h2>
                    <div style={{marginTop: '30px'}}>
                      <Button
                        onClick={()=>{history.push('/products')}}
                      >View Products</Button>
                      <Button 
                      onClick={()=>{history.push('/register')}}
                      style={{marginLeft: '15px'}} type="primary">Get Started</Button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div style ={{}}className="duo-element">
                <img style={{marginTop:"100px", height: '500px', marginLeft: 'auto', marginRight: 0}} src={showroom}></img>
               
              </div>
          </div>
        </div>
        <SiteFooter/>
      </div>
    </div>
  );
};

export default HomePage;
