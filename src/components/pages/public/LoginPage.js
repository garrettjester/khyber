import React from "react";
import AuthPage from "../../auth-page";
import logo from "../../../setup-logo.svg";
import history from "../../../utils/history";

import {SignInForm, ResetPasswordForm, ConfirmCodeForm} from "../../auth/forms"
import {Route, Switch, withRouter} from "react-router-dom";

const LoginPage = (props) => {

  return (
    <AuthPage
      logo={logo}
      onLogoClick={() => {
        history.push("/");
      }}
    >
      <Switch>
        <Route exact path="/auth" component={SignInForm} />
        <Route path="/auth/reset-password" component={ResetPasswordForm} />
        <Route path="/auth/confirm-reset-password" component={ConfirmCodeForm} />
      </Switch>
    </AuthPage>
  );
};

export default LoginPage;


