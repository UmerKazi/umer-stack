import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  IconCheck,
  IconCheckbox,
  IconSquare,
  IconSquareCheckFilled,
} from "@tabler/icons-react";

interface FormCheckBoxProps {
  label: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export default function FormCheckBox({
  label,
  checked,
  setChecked,
}: FormCheckBoxProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<IconSquare />} // Replace this with your custom unchecked icon if needed
          checkedIcon={<IconSquareCheckFilled />} // Custom checked icon
          sx={{
            color: "#dfe5ef", // Color for unchecked state
            "&.Mui-checked": {
              color: "var(--accent)", // Color for checked state
            },
            "& .MuiSvgIcon-root": {
              // Apply custom styles to the icon
              fill: "var(--accent)", // Fill color for the icon
            },
            "& .MuiCheckbox-root": {
              // Custom styles for the checkbox root
              borderColor: "var(--accent)", // Border color
            },
            "&:hover": {
              // Custom hover styles
              backgroundColor: "transparent", // Change the background color on hover
            },
          }}
        />
      }
      label={label}
      sx={{
        "& .MuiTypography-root": {
          // Custom styles for the label
          color: "var(--text-primary)", // Label color, adjust as needed
          fontFamily: "var(--font)",
          fontSize: "14px",
        },
      }}
    />
  );
}
