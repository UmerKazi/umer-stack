import React from "react";
import { Button } from "@mui/material";
import styles from "./FormSubmitButton.module.css";

interface FormSubmitButtonProps {
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export default function FormSubmitButton({ onSubmit }: FormSubmitButtonProps) {
  return (
    <Button
      variant="contained"
      className={styles.button}
      onClick={onSubmit}
      sx={{
        width: "100%",
        height: "50px",
        backgroundColor: "var(--accent)",
        border: "none",
        borderRadius: "10px",
        color: "var(--background)",
        textTransform: "none",
        fontWeight: "500",
        fontSize: "16px",
        marginTop: "15px",
        cursor: "pointer",
        boxShadow: "none",
        fontFamily: "var(--font)",
        "&:hover": {
          backgroundColor: "var(--accent-hover)",
          boxShadow: "none",
        },
      }}
    >
      Continue
    </Button>
  );
}
