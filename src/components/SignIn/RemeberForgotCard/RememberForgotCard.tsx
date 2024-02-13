import FormCheckBox from "@/components/common/Form/FormCheckBox/FormCheckBox";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./RememberForgotCard.module.css";

interface RememberForgotCardProps {
  rememberMe: boolean;
  setRemeberMe: React.Dispatch<React.SetStateAction<boolean>>;
  forgotPassword: () => void;
}

export default function RememberForgotCard({
  rememberMe,
  setRemeberMe,
  forgotPassword,
}: RememberForgotCardProps) {
  return (
    <Box className={styles.main}>
      <FormCheckBox
        label="Remember Me"
        checked={rememberMe}
        setChecked={setRemeberMe}
      />
      <Typography onClick={forgotPassword} className={styles.text}>
        Forgot Password?
      </Typography>
    </Box>
  );
}
