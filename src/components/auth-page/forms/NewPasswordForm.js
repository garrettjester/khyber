import React from "react";
import NewPasswordItem from "@khyberlabs/khyberkit.new-password-item"
import AuthForm from "@khyberlabs/khyberkit.auth-form";

const NewPasswordForm = ({
  title,
  subtitle,
  onNewPasswordSubmit,
  buttonTitle,
  loading,
}) => {
  return (
    <AuthForm
      loading={loading}
      buttonTitle={buttonTitle ?? "Reset Password"}
      title={title ?? "Create new password"}
      subtitle={subtitle}
      onFinish={onNewPasswordSubmit}
    >
      <NewPasswordItem />
    </AuthForm>
  );
};

export default NewPasswordForm;
