import React from "react";
import { Form, Input, Button, Typography } from "antd";
import ResponsiveInput from "@khyberlabs/khyberkit.responsive-input";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import AuthForm from "@khyberlabs/khyberkit.auth-form";

const { Text } = Typography;

const SignInForm = ({
  title,
  inputName,
  inputType,
  onFinish,
  loading,
  buttonTitle,
  showPasswordReset
}) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const renderFooter = () => {
    return (
      <div>
        <Text
          style={{
            textAlign: "left",
            fontSize: "13px",
            fontWeight: 400,
            fontFamily: "Roboto",
            padding: "20px 0",
            color: "gray",
          }}
        >
          Forgot password?
        </Text>
        <Button
          onClick={showPasswordReset}
          type="link"
          style={{
            fontSize: "13px",
            marginLeft: "0px",
            paddingLeft: "5px"
          }}
        >
          Reset password
        </Button>
      </div>
    );
  };

  return (
    <AuthForm 
    title={title ?? "Sign in"} 
    footer={renderFooter()}
    onFinish={onFinish}
    buttonTitle={buttonTitle ?? "Sign In"}
    loading={loading}
    >
    
  
        <Form.Item
          name={inputName ?? "email"}
          rules={[
            {
              type: inputType === "email" ? "email" : "string",
              required: true,
              message: "Required.",
            },
          ]}
        >
          <ResponsiveInput
            type={inputType ?? "email"}
            placeholder={inputType ?? "Email"}
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
            size={isMobile ? "large" : "middle"}
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
    </AuthForm>
  );
};

export default SignInForm;
