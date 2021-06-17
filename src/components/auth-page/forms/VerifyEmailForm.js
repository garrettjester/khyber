import { Button, Form } from "antd";
import React, {useState} from "react";
import AuthForm from "@khyberlabs/khyberkit.auth-form";
import ResponsiveInput from "@khyberlabs/khyberkit.responsive-input";

const VerifyEmailForm = ({
  title, 
  subtitle, 
  onVerifySubmit,
  loading, 
  email
}) => {

    const [valid, setValid] = useState(false)

  return (
    <AuthForm
    onFinish={onVerifySubmit}
    loading={loading}
    title={title ?? "Enter code"}
    subtitle={subtitle ?? `To reset your password, enter the code we sent to ${email}`}
    >

        <Form.Item 
        name="code" 
        >
        <ResponsiveInput 
        name="code"
        placeholder="Enter 6-digit code"
        onChange={(e) => {
          setValid(e.target.value.length > 5)
        }}
        />
        </Form.Item>
    </AuthForm>
  )
};

export default VerifyEmailForm;