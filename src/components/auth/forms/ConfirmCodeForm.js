import React, {useState} from "react";
import { Form } from "antd";
import AuthForm from "@khyberlabs/khyberkit.auth-form";
import ResponsiveInput from "@khyberlabs/khyberkit.responsive-input";


const ConfirmCodeForm = ({
  title, 
  subtitle, 
  onFinish,
  loading, 
  email
}) => {

  const [valid, setValid] = useState(false)

  return (
    <AuthForm
    onFinish={onFinish}
    loading={loading}
    title={title ?? "Enter code"}
    subtitle={subtitle ?? `To reset your password, enter the code we sent to ${email}`}
    disabled={!valid}
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

export default ConfirmCodeForm;