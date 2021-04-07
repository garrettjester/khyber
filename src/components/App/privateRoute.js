import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";


export default (ChildComponent) => {
  class PrivateRoute extends Component {
    componentDidMount() {
      this.checkAuthentication();
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    checkAuthentication() {
      if (!this.props.auth) {
        this.props.history.push("/auth");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps, actions)(PrivateRoute);
};
