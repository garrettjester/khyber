import React, { useState } from "react";
import { Form, Input, Button, Divider } from "antd";
import "../../../styles/pages/LoginPage.css";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { SIGN_IN } from "../../../apollo/queries/AuthQueries";
import { useLazyQuery } from "@apollo/client";
import { storeLogin } from "../../../utils/auth";
import CenterY from "../../layout/CenterY";
import BoxElement from "../../App/BoxElement";
import Div100vh from "react-div-100vh";
import { useMediaQuery } from "react-responsive";
import StaticLogo from "../../App/StaticLogo";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";


const LoginPage = (props) => {

  const isMobile = useMediaQuery({maxWidth: 800})
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, { data, loading, error }] = useLazyQuery(SIGN_IN, {
    variables: { email, password },
    fetchPolicy: "network-only",
    onCompleted(data) {
      if (data) props.changeAuth(true);
      storeLogin(data.signIn.accessToken);
      props.history.push("/");
    },
  });


  const renderForm = () => {
    return (
      <div className="login-form__container">
      <h1 className="login-form__title">Sign in</h1>

      <Form
        style={{ width: "100%" }}
        name="normal_login"
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
            size={(isMobile) ? 'large' : 'middle'}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
          <Input.Password
            size={(isMobile) ? 'large' : 'middle'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ width: "100%", height: "38px" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      <Divider style={{ margin: "0" }}></Divider>
      <div className="forgot-password-container">
        <text className="login-subtitle">Forgot password?</text>
        <a
          href="www.khyber.io/reset-password"
          style={{ fontSize: "13px", marginLeft: "5px" }}
        >
          Reset password
        </a>
      </div>
    </div>
    )
  }



  if (isMobile) {
    return (
      <Div100vh>
        <StaticLogo/>
        <CenterY>
          {renderForm()}
        </CenterY>
      </Div100vh>
    )
  }
  return (
    <Div100vh>
      <div className="login-page__wrapper">
        <StaticLogo/>
        <CenterY width="400px">
          <div className="box-wrapper">
            <BoxElement>
              {renderForm()}
            </BoxElement>
          </div>
        </CenterY>
      </div>
    </Div100vh>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(LoginPage);
