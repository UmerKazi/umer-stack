import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./FormError.module.css";

interface FormErrorProps {
  formError: string;
}

export default function FormError({ formError }: FormErrorProps) {
  return (
    <Box className={styles.error}>
      <Typography className={styles.errorText}>{formError}</Typography>
    </Box>
  );
}
