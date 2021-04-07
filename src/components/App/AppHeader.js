import AppSearch from "./AppSearch"
import React from "react";
import logo from "../../khyber.svg";
import "../../styles/AppHeader.css";
import ProfileDropdown from "./ProfileDropdown";
import { connect } from "react-redux";
import {Button} from "antd"

const AppHeader = props => {

  const renderRightContent = () => {
    if (this.props.auth) {
      return(<ProfileDropdown/>)
    } else {
      return(<Button type="primary">Log In</Button>)
    }
  }

  return (
    <div className="AppHeader-Wrapper">
      <img className="AppHeader-Logo" src={logo} alt="Khyber logo" />
      <AppSearch/>  
      <div className="AppHeader-RightContent">
        {renderRightContent()}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(AppHeader);
