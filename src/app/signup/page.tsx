"use client";

import SignUpForm from "@/components/SignUp/SignUpForm/SignUpForm";
import AuthPageImage from "@/components/common/AuthPageImage/AuthPageImage";
import PageContainer from "@/components/common/PageContainer/PageContainer";
import SpacedRowContainer from "@/components/common/SpacedRowContainer/SpacedRowContainer";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
import { signUpWithEmail } from "@/lib/firebase/auth";
import { SignUpFormObject, defaultSignUpFormObject } from "@/types/auth";
import signUpErrorChecking from "@/utils/signUpErrorChecking";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<SignUpFormObject>(
    defaultSignUpFormObject
  );
  const handleChange =
    (prop: string) => (event: { target: { value: any } }) => {
      setFormValues({ ...formValues, [prop]: event.target.value });
    };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const onSubmit = async () => {
    const error = await signUpErrorChecking(formValues);
    if (error !== "") {
      setFormError(error);
    } else {
      setFormError("");
      signUpWithEmail(
        formValues.email,
        formValues.password,
        formValues.firstName,
        formValues.lastName
      ).then(() => {
        router.push("/auth-page");
      });
    }
  };
  useRedirectIfAuthenticated();
  return (
    <PageContainer>
      <SpacedRowContainer>
        <AuthPageImage />
        <SignUpForm
          formValues={formValues}
          handleChange={handleChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onSubmit={onSubmit}
          formError={formError}
        />
      </SpacedRowContainer>
    </PageContainer>
  );
}
