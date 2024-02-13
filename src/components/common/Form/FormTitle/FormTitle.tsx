import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./FormTitle.module.css";

interface FormTitleProps {
  title: string;
  subtitle: string;
}

export default function FormTitle({ title, subtitle }: FormTitleProps) {
  return (
    <Box className={styles.main}>
      <Typography
        style={{
          fontSize: "24px",
          color: "var(--black)",
          fontWeight: "600",
          fontFamily: "var(--font)",
          marginBottom: "5px",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </Typography>
      <Typography
        style={{
          fontSize: "14px",
          color: "var(--black)",
          fontWeight: "300",
          fontFamily: "var(--font)",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
