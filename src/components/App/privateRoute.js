import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";


const privateRoute = (ChildComponent, pushTo) => {
  class PrivateRoute extends Component {
    componentDidMount() {
      this.checkAuthentication();
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    checkAuthentication() {
      console.log('AUTH CHECK', this.props.auth)
      if (!this.props.auth) {
        if (pushTo) {
          this.props.history.push(`/${pushTo}`)
          return
        } else {
          this.props.history.push("/auth");
        }
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

export default privateRoute;
