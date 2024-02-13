import { Box } from "@mui/material";
import React from "react";

import styles from "./CenteredContainer.module.css";

interface CenteredContainerProps {
  children: React.ReactNode;
}

export default function CenteredContainer({
  children,
}: CenteredContainerProps) {
  return <Box className={styles.main}>{children}</Box>;
}
