import React from "react";
import FormTemplate from "@khyberlabs/khyberkit.sign-in-form";
import { useLazyQuery } from "@apollo/client";
import { SIGN_IN } from "../../../apollo/queries/AuthQueries";
import { storeLogin } from "../../../utils/auth";
import history from "../../../utils/history";
import { connect } from "react-redux";
import * as actions from "../../../actions";

const SignInForm = (props) => {
  const [signIn, { loading, error }] = useLazyQuery(SIGN_IN, {
    fetchPolicy: "network-only",
    onCompleted(data) {
      if (data) props.changeAuth(true);
      storeLogin(data.signIn.accessToken);
      props.history.push("/");
    },
  });

  const onFinish = (values) => {
    console.log(values);
    signIn(values);
  };

  const showPasswordReset = () => {
    history.push("/auth/reset-password");
  };

  return (
    <FormTemplate
      showPasswordReset={showPasswordReset}
      onFinish={onFinish}
      loading={loading}
    />
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(SignInForm);
