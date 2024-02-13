import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./SignInForm.module.css";
import CenteredContainer from "@/components/common/CenteredContainer/CenteredContainer";
import FormContainer from "@/components/common/Form/FormContainer/FormContainer";
import FormTextField from "@/components/common/Form/FormTextField/FormTextField";
import { SignInFormObject } from "@/types/auth";
import FormSubmitButton from "@/components/common/Form/FormSubmitButton/FormSubmitButton";
import FormError from "@/components/common/Form/FormError/FormError";
import FormTitle from "@/components/common/Form/FormTitle/FormTitle";
import FormProviderButton from "@/components/common/Form/FormProviderButton/FormProviderButton";
import RememberForgotCard from "../RemeberForgotCard/RememberForgotCard";
import FormCheckBox from "@/components/common/Form/FormCheckBox/FormCheckBox";
import Link from "next/link";

interface SignInFormProps {
  formValues: SignInFormObject;
  handleChange: (prop: string) => (event: {
    target: {
      value: any;
    };
  }) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  rememberMe: boolean;
  setRemeberMe: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  forgotPassword: () => void;
  formError: string;
}

export default function SignInForm({
  formValues,
  handleChange,
  showPassword,
  setShowPassword,
  rememberMe,
  setRemeberMe,
  forgotPassword,
  onSubmit,
  formError,
}: SignInFormProps) {
  return (
    <Box className={styles.main}>
      <CenteredContainer>
        <FormContainer>
          <FormTitle
            title="Welcome to AppName"
            subtitle="Your All Purpose App"
          />
          <FormProviderButton onSubmit={onSubmit} type="google" page="signin" />
          <FormTextField
            idName="email"
            labelName="Email"
            value={formValues.email}
            onChange={handleChange("email")}
          />
          <FormTextField
            idName="password"
            labelName="Password"
            value={formValues.password}
            onChange={handleChange("password")}
            type="password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <Box className={styles.rememberForgot}>
            <FormCheckBox
              label="Remember Me"
              checked={rememberMe}
              setChecked={setRemeberMe}
            />
            <Typography onClick={forgotPassword} className={styles.text}>
              Forgot Password?
            </Typography>
          </Box>
          {formError !== "" && <FormError formError={formError} />}
          <FormSubmitButton onSubmit={onSubmit} />
          <Typography className={styles.redirect}>
            New to AppName?{" "}
            <Link href="/signup" className={styles.link}>
              Sign Up
            </Link>
          </Typography>
        </FormContainer>
      </CenteredContainer>
    </Box>
  );
}
