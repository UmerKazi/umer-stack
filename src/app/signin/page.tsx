"use client";

import SignInForm from "@/components/SignIn/SignInForm/SignInForm";
import AuthPageImage from "@/components/common/AuthPageImage/AuthPageImage";
import PageContainer from "@/components/common/PageContainer/PageContainer";
import SpacedRowContainer from "@/components/common/SpacedRowContainer/SpacedRowContainer";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
import { signInWithEmail } from "@/lib/firebase/auth";
import { SignInFormObject, defaultSignInFormObject } from "@/types/auth";
import signInErrorChecking from "@/utils/signInErrorChecking";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<SignInFormObject>(
    defaultSignInFormObject
  );
  const handleChange =
    (prop: string) => (event: { target: { value: any } }) => {
      setFormValues({ ...formValues, [prop]: event.target.value });
    };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const [rememberMe, setRemeberMe] = useState<boolean>(false);
  const onSubmit = async () => {
    const err = await signInErrorChecking(formValues);
    if (err !== "") {
      setFormError(err);
    } else {
      setFormError("");
      signInWithEmail(formValues.email, formValues.password).then(() => {
        router.push("/auth-page");
      });
    }
  };
  useRedirectIfAuthenticated();
  return (
    <PageContainer>
      <SpacedRowContainer>
        <AuthPageImage />
        <SignInForm
          formValues={formValues}
          handleChange={handleChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onSubmit={onSubmit}
          formError={formError}
          rememberMe={rememberMe}
          setRemeberMe={setRemeberMe}
          forgotPassword={() => router.push("/forgot-password")}
        />
      </SpacedRowContainer>
    </PageContainer>
  );
}
