import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import logo from "../../../khyber.svg";
import "../../../styles/pages/LoginPage.css";
import {connect} from "react-redux";
import * as actions from "../../../actions"
import { SIGN_IN } from "../../../apollo/queries/AuthQueries";
import { useLazyQuery } from "@apollo/client";
import { Redirect } from "react-router";
import { storeLogin } from "../../../utils/auth";
const { Title } = Typography;

const LoginPage = props => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, { data, loading, error }] = useLazyQuery(SIGN_IN, {
    variables: { email, password },
    fetchPolicy: "network-only",
    onCompleted(data) {
      if (data) props.changeAuth(true)
      console.log("SIGN IN DATA", data)
      storeLogin(data.signIn.accessToken);
      props.history.push("/")
    }
  });


  return (
    <div className="loginpage">
      <div className="branding-container">
        <div>
          <img className="login-logo" src={logo} alt="khyber logo"></img>
          <Title style={{ paddingTop: "15px" }} level={3}>
            Automotive intelligence.
          </Title>
        </div>
      </div>
      <div className="right-container">
        <div className="form-container">
          <Form
            style={{ width: "330px" }}
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={() => {
              signIn();
            }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Required.",
                },
              ]}
            >
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                size="large"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Required.",
                },
              ]}
            >
              <Input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                size="large"
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ width: "100%", height: "40px" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {auth: state.auth};
}

export default connect(mapStateToProps, actions)(LoginPage);
