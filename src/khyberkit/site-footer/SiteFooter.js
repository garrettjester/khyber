import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Scaffold from "@khyberlabs/khyberkit.scaffold";
import "./SiteFooter.css";
import { useMediaQuery } from "react-responsive";


const SiteFooter = ({
  style, 
  leftContent, 
  routes, 
  rightContent
}) => {

  const isMobile = useMediaQuery({maxWidth: 800});

  const renderSiteNav = () => {
    return routes.map((route) => {
      return (
        <div className="footer__nav-column">
          <h3 style={{
            fontFamily: 'Roboto', 
            color: 'white',
            textAlign: (isMobile) ? 'center' : 'left'
            }}
          >
            {route.title}
          </h3>
          <ul className="subroute-list">
            {renderSubroutes(route.subroutes)}
          </ul>
        </div>
    )
    })
  }
  
  const renderSubroutes = (subroutes) => {
    if (subroutes) {
      return subroutes.map((route) => {
        return (
          <li className="footer__list-item">
            <NavLink 
            className="footer__nav-item" 
            to={route.path}>
              {route.name}
            </NavLink>
          </li>
        );
      });
    }
  };

  return (
    <div style={style} className="footer__wrapper">
      <Scaffold>
      <div className="footer__container">
        <div>{leftContent}</div>
        <div className="footer__nav-container">
          {renderSiteNav()}
        </div>
        <div>{rightContent}</div>
      </div>
      </Scaffold>
    </div>
  )
};


export default SiteFooter;