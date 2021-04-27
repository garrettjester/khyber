import { Button, Divider, Typography } from "antd";
import React, { Component, createRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../utils/history";
import * as actions from "../../actions";
import "../../styles/components/MobileMenu.css";

const { Text } = Typography;


class MobileMenu extends Component {


  render() {
    if (!this.props.menu) return null;

    return (
      <div onClick={() => this.props.toggleMobileMenu(false)} className="sidemenu__background">
        <div onClick={(e)=> e.stopPropagation()} className="sidemenu__content__wrapper">
          <div className="sidemenu__content__container">
            <div className="sidemenu__nav">
              <ul className="sidemenu__nav__list">
                <li className="sidemenu__nav__listitem">
                  <NavLink
                    className="sidemenu__nav__link"
                    to="/about"
                    
                  >
                    About
                  </NavLink>
                </li>
                <li className="sidemenu__nav__listitem">
                  <NavLink
                    className="sidemenu__nav__link"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="sidemenu__nav__listitem">
                  <NavLink
                    className="sidemenu__nav__link"
                    to="/request-access"
                  >
                    Request Access
                  </NavLink>
                </li>
              </ul>
            </div>
            <Divider />
            <Button
              onClick={() => {
               history.push("/auth");
              }}
              style={{ padding: "0px 15px", height: "40px" }}
              type="primary"
            >
              Sign In to the Dashboard
            </Button>
            <div className="sidemenu__disclaimer">
              <Text type="secondary">© Khyber Labs</Text>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { menu: state.menu.mobile_menu_open };
};

export default connect(mapStateToProps, actions)(MobileMenu);
