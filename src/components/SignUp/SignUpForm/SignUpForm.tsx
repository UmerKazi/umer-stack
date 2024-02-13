import React from "react";
import styles from "./SignUpForm.module.css";
import CenteredContainer from "@/components/common/CenteredContainer/CenteredContainer";
import FormContainer from "@/components/common/Form/FormContainer/FormContainer";
import { Box, Typography } from "@mui/material";
import FormTitle from "@/components/common/Form/FormTitle/FormTitle";
import FormTextField from "@/components/common/Form/FormTextField/FormTextField";
import { SignUpFormObject } from "@/types/auth";
import FormProviderButton from "@/components/common/Form/FormProviderButton/FormProviderButton";
import FormError from "@/components/common/Form/FormError/FormError";
import FormSubmitButton from "@/components/common/Form/FormSubmitButton/FormSubmitButton";
import Link from "next/link";

interface SignUpFormProps {
  formValues: SignUpFormObject;
  handleChange: (prop: string) => (event: {
    target: {
      value: any;
    };
  }) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  formError: string;
}

export default function SignUpForm({
  formValues,
  handleChange,
  showPassword,
  setShowPassword,
  onSubmit,
  formError,
}: SignUpFormProps) {
  return (
    <Box className={styles.main}>
      <CenteredContainer>
        <FormContainer>
          <FormTitle
            title="Welcome to AppName"
            subtitle="Your All Purpose App"
          />
          <FormProviderButton onSubmit={onSubmit} type="google" page="signup" />
          <Box className={styles.twoBox}>
            <FormTextField
              idName="firstName"
              labelName="First Name"
              value={formValues.firstName}
              onChange={handleChange("firstName")}
            />
            <FormTextField
              idName="lastName"
              labelName="Last Name"
              value={formValues.lastName}
              onChange={handleChange("lastName")}
            />
          </Box>
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
          <FormTextField
            idName="confirmPassword"
            labelName="Confirm Password"
            value={formValues.confirmPassword}
            onChange={handleChange("confirmPassword")}
            type="password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          {formError !== "" && <FormError formError={formError} />}
          <FormSubmitButton onSubmit={onSubmit} />
          <Typography className={styles.redirect}>
            Already have an account?{" "}
            <Link href="/signin" className={styles.link}>
              Sign In
            </Link>
          </Typography>
        </FormContainer>
      </CenteredContainer>
    </Box>
  );
}
