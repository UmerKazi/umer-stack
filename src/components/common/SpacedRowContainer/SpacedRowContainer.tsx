import { Box } from "@mui/material";
import React from "react";
import styles from "./SpacedRowContainer.module.css";

interface SpacedRowContainerProps {
  children: React.ReactNode;
}

export default function SpacedRowContainer({
  children,
}: SpacedRowContainerProps) {
  return <Box className={styles.main}>{children}</Box>;
}
