import React, {useEffect} from "react";
import AppHeader from "../App/AppHeader";
import "../../styles/components/SiteWrapper.css";
import { Switch, Route, useLocation } from "react-router-dom";
import ProductsPage from "../pages/public/ProductsPage";
import AccessRequestPage from "../pages/public/AccessRequestPage";
import HomePage from "../pages/public/Home/HomePage";
import { connect } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import Div100vh from 'react-div-100vh'
import * as actions from "../../actions"

const SiteWrapper = props => {

    const location = useLocation();

    useEffect(() => {
      handleLocationChanged()
      // eslint-disable-next-line
    },[location])


    const handleLocationChanged = () => {
      props.toggleDarkMode(location.pathname === '/products')
    }

    return (
      <ScrollToTop>
        <Div100vh>
        <AppHeader type={(props.darkMode) ? "dark": ''} />
        <div className={`site-wrapper__content__container ${(props.menuOpen) ? `scroll-disabled` : ``} ${(props.darkMode) ? `dark-mode` : ``}`}>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/request-access" component={AccessRequestPage} />
          </Switch>
        </div>
        </Div100vh>
      </ScrollToTop>
    );
  };

const mapStateToProps = state => {

  return {
    darkMode: state.darkMode.dark_mode,
    menuOpen: state.menu.mobile_menu_open}
}

export default connect(mapStateToProps, actions)(SiteWrapper);
