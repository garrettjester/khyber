import Text from "antd/lib/typography/Text";
import React from "react";
import logo from "../../khyber.svg";
import { NavLink } from "react-router-dom";

import "../../styles/components/SiteFooter.css";
import { connect } from "react-redux";
const SiteFooter = props => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="branding-box">
          <NavLink to="/">
            <img
              className={`footer-logo filter-gray`}
              src={logo}
              alt="Khyber Logo"
            />
          </NavLink>
          <Text style={{ color: "#474747", marginTop: '15px' }}>© Khyber Labs</Text>
          <Text style={{ color: "#474747" }}>United States (US)</Text>
          <Text style={{ color: "#474747" }}>English (EN)</Text>
        </div>
        <div className="footer-nav">
          <ul className="footer-list">
            <li className="footer-list-item">
              <NavLink className="nav-item-footer" to="/about">About</NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="nav-item-footer" to="/products">Products</NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="nav-item-footer" to="/request-access">Pricing</NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="nav-item-footer" to="/request-access">Request Access</NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="nav-item-footer" to="/legal">Terms & Conditions</NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="nav-item-footer" to="/legal">Privacy Policy</NavLink>
            </li>
          
          </ul>
        </div>
        <div className="contact-item">
          <Text 
          style={{display: 'block', color: 'white', fontWeight: '500'}}
          type="secondary">Contact</Text>
          <a href="mailto:info@khyber.io" style={{color: 'lightgray', paddingTop: '5px', display: 'block'}}>info@khyber.io</a>
          <Text style={{color: "#474747"}}>1007 N Orange Street, Wilmington, DE</Text>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {menu: state.menu.mobile_menu_open}
}

export default connect(mapStateToProps)(SiteFooter);
