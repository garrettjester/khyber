import AppSearch from "./AppSearch";
import React, { Component } from "react";
import logo from "../../khyber.svg";
import "../../styles/components/AppHeader.css";
import ProfileDropdown from "./ProfileDropdown";
import { connect } from "react-redux";
import { Button } from "antd";
import SiteNav from "./SiteNav";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import * as actions from "../../actions/index";
import MobileMenu from "../layout/MobileMenu";

class AppHeader extends Component {


  updateDimensions() {
    if(window.innerWidth > 800) {
      this.props.toggleMobileMenu(false)
    } 
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }
  
  
  renderRightContent() {
    if (this.props.auth) {
      return <ProfileDropdown />;
    } else {
      return (
        <NavLink to="/auth">
          <Button type="primary">Sign In to the Dashboard</Button>
        </NavLink>
      );
    }
  }

  renderCenterContent() {
    if (this.props.auth) {
      return <AppSearch />;
    } else {
      return <SiteNav type={this.props.type} />;
    }
  }

  handleMenuClick = () => {
    this.props.toggleMobileMenu(!this.props.menu);
  };

  render() {
    return (
      <div className="app-header__container">
        <MobileMenu/>
        <div
          className={`app-header__bar${
            this.props.type === "dark" ? `__dark` : ``
          }`}
        >
          <div className="app-header__left-content">
            <div className="app-header__hamburger-container">
              <HamburgerMenu
                isOpen={this.props.menu}
                menuClicked={this.handleMenuClick}
                width={20}
                height={15}
                strokeWidth={2}
                rotate={0}
                color="gray"
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>
            <NavLink to="/">
              <img
                className={`app-header__logo ${
                  this.props.type === "dark" ? `filter-white` : ``
                }`}
                src={logo}
                alt="Khyber logo"
              />
            </NavLink>
          </div>
          {this.renderCenterContent()}
          <div className="app-header__right-content hidden-mobile">
            {this.renderRightContent()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, menu: state.menu.mobile_menu_open };
};

export default connect(mapStateToProps, actions)(AppHeader);
