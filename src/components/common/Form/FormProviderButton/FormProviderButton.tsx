import React from "react";
import { Box, Button, Divider } from "@mui/material";
import styles from "./FormProviderButton.module.css";
import { IconBrandGoogleFilled } from "@tabler/icons-react";

interface FormProviderButtonProps {
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  type: "google" | "facebook";
  page: string;
}

export default function FormProviderButton({
  onSubmit,
  type,
  page,
}: FormProviderButtonProps) {
  return (
    <Box className={styles.main}>
      <Button
        variant="contained"
        className={styles.button}
        onClick={onSubmit}
        sx={{
          width: "100%",
          height: "50px",
          backgroundColor: "white",
          border: "1px solid #e5eaee",
          borderRadius: "10px",
          color: "var(--text-primary)",
          textTransform: "none",
          fontWeight: "500",
          fontSize: "16px",
          marginTop: "15px",
          marginBottom: "10px",
          cursor: "pointer",
          fontFamily: "var(--font)",
          boxShadow: "none",
          "&:hover": {
            color: "var(--accent)",
            backgroundColor: "#f5f5f5",
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconBrandGoogleFilled size={18} style={{ marginRight: "6px" }} />
          {page == "signin" ? <>Sign In</> : <>Sign Up</>} with Google
        </Box>
      </Button>
      <Divider
        flexItem
        sx={{
          fontSize: "14px",
          fontFamily: "var(--font)",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        {" "}
        or {page == "signin" ? <>sign in</> : <>sign up</>} with
      </Divider>
    </Box>
  );
}
