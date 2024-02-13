import React from "react";
import { Box } from "@mui/material";
import styles from "./PageContainer.module.css";

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <Box className={styles.main}>{children}</Box>;
}
