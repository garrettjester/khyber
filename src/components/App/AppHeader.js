import AppSearch from "./AppSearch"
import React, {Component} from "react";
import logo from "../../khyber.svg";
import "../../styles/components/AppHeader.css";
import ProfileDropdown from "./ProfileDropdown";
import { connect } from "react-redux";
import {Button} from "antd"
import SiteNav from "./SiteNav";
import { NavLink } from "react-router-dom";


class AppHeader extends Component {

  renderRightContent() {
    if (this.props.auth) {
      return(<ProfileDropdown/>)
    } else {
      return(<NavLink to="/auth">
        <Button type="primary">Sign In to the Dashboard</Button>
        </NavLink>)
    }
  }

  renderCenterContent() {
    if (this.props.auth) {
      return(<AppSearch/>)
    } else {
      return(<SiteNav type={this.props.type}/>)
    }
  }


  render() {
    return (
      <div className={`AppHeader-Wrapper${(this.props.type=="dark")?`-Dark`:``}`}>
        <NavLink to="/">
          <img className={`AppHeader-Logo ${(this.props.type=="dark") ? `filter-white`:``}`} src={logo} alt="Khyber logo" />
        </NavLink>
        
        {this.renderCenterContent()}
        <div className="AppHeader-RightContent">
          {this.renderRightContent()}
        </div>
      </div>
    );
  }
};


const mapStateToProps = state => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(AppHeader);
