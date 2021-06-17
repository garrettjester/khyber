import React from "react";
import "../../styles/App.less";
import { connect } from "react-redux";
import AppContainer from "./AppContainer";


const App = (props) => {
  
  return (
    <div className={`container ${(props.darkMode) ? 'app-dark-mode' : ''}`}>
       <AppContainer/>
    </div>
  );
  
}


const mapStateToProps = state => {
  return {darkMode: state.darkMode.dark_mode}
}

export default connect(mapStateToProps)(App);
