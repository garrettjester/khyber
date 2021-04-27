import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/SiteNav.css"

const SiteNav = () => {
  return (
    <div style={{}} className="sitenav-wrapper hidden-mobile">
      <ul>
        <li>
          <NavLink className="sitenav-item" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="sitenav-item" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="sitenav-item" to="/request-access">
            Request Access
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SiteNav;
