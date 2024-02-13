export type SignInFormObject = {
    email: string;
    password: string;
}

export const defaultSignInFormObject: SignInFormObject = {
    email: "",
    password: "",
}

export type SignUpFormObject = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const defaultSignUpFormObject: SignUpFormObject = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}