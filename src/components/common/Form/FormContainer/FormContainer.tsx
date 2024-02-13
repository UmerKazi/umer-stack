import React from "react";
import { Box } from "@mui/material";
import styles from "./FormContainer.module.css";

interface FormContainerProps {
  children: React.ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
  return <Box className={styles.main}>{children}</Box>;
}
