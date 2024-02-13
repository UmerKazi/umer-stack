import { SignInFormObject } from "@/types/auth";

export default async function signInErrorChecking(
  formValues: SignInFormObject
) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (formValues.email.length === 0) {
    return "Email is required";
  }
  if (emailPattern.test(formValues.email) === false) {
    return "Invalid email address";
  }
  if (formValues.password.length === 0) {
    return "Password is required";
  }
  return "";
}
