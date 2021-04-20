import Text from "antd/lib/typography/Text";
import React from "react";
import logo from "../../khyber.svg";
import {NavLink} from "react-router-dom";

import "../../styles/components/SiteFooter.css"
const SiteFooter = () => {

  return (
    <div className="footer-wrapper">
      <div className="branding-box">
      <NavLink to="/">
        <img className="footer-logo filter-gray" src={logo} alt="Khyber Logo"/>
      </NavLink>
      <br/>
      <Text style={{color:'#474747'}}>© Khyber Labs</Text>
      <br/>
      <Text style={{color:'#474747'}}>United States (US)</Text>
      <br/>
      <Text style={{color:'#474747'}}>English (EN)</Text>
    </div>
    <div className="footer-nav">
      
    </div>
      <ul>
        <li>
          <NavLink to="/about" className="sitenav-item">About</NavLink>
        </li>
        <li>
          <NavLink to="/products" className="sitenav-item">Products</NavLink>
        </li>
        <li>
          <NavLink to="/request-access" className="sitenav-item">Request Access</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SiteFooter;