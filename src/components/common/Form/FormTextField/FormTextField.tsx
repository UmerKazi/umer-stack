/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import {
  IconButton,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React from "react";

interface FormTextFieldProps {
  idName: string;
  labelName: string;
  value: string;
  onChange: (event: { target: { value: any } }) => void;
  disabled?: boolean;
  type?: string;
  showPassword?: boolean;
  setShowPassword?: any;
  style?: any;
  select?: boolean;
  options?: string[];
  date?: boolean;
  width?: string;
}

export default function FormTextField({
  idName,
  labelName,
  value,
  onChange,
  disabled,
  type,
  showPassword,
  setShowPassword,
  style,
  select,
  options,
  date,
  width,
}: FormTextFieldProps) {
  if (date) {
    <TextField
      type="date"
      margin="normal"
      disabled={disabled}
      id={idName}
      name={idName}
      fullWidth
      value={value}
      onChange={onChange}
      label={labelName}
      multiline={false} // Pass the multiline prop to the TextField
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "rgb(229, 234, 239)", // Change the focused border color
          },
          "&:hover fieldset": {
            borderColor: "rgb(229, 234, 239)", // Change the hover border color
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--accent)", // Change the focused border color
          },
        },
        "& .MuiInputLabel-root": {
          color: "grey", // Change the unfocused label color
          fontFamily: "var(--font)",
          "&.Mui-focused": {
            color: "var(--accent)", // Change the focused label color
          },
        },
      }}
    />;
  }
  if (select && options) {
    return (
      <FormControl fullWidth margin="normal">
        <InputLabel id={`${idName}-label`} sx={{ fontFamily: "var(--font)" }}>
          {labelName}
        </InputLabel>
        <Select
          labelId={`${idName}-label`}
          id={idName}
          value={value}
          label={labelName}
          onChange={onChange}
          disabled={disabled}
          sx={{
            borderRadius: "10px",
            backgroundColor: "var(--background-light)",
            fontFamily: "var(--font)",
            width: width || "100%",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(229, 234, 239)", // Attempt to mimic the ':before' and ':after' styling
              fontFamily: "var(--font)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(229, 234, 239)", // Mimic ':hover::before'
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--accent)", // Focused state, change 'red' to your desired color
            },
            color: "#808080", // Apply root color
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "16px",
                color: "var(--black)",
                fontWeight: "500",
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  return (
    <TextField
      type={showPassword ? "text" : type}
      margin="normal"
      disabled={disabled}
      id={idName}
      name={idName}
      fullWidth
      multiline={type === "Des"}
      value={value}
      onChange={onChange}
      label={labelName}
      InputProps={{
        sx: {
          borderRadius: "10px",
          backgroundColor: "var(--background-light)",
          border: "none",
          fontFamily: "var(--font)",
          ...style,
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: width || "100%",
        },
        endAdornment:
          type === "password" && !showPassword ? (
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              <IconEye />
            </IconButton>
          ) : type === "password" && showPassword ? (
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              <IconEyeOff />
            </IconButton>
          ) : null,
      }}
      sx={{
        "& .MuiInputBase-input": {
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        "& .MuiOutlinedInput-root": {
          display: "flex",
          overflow: "hidden",
          textOverflow: "ellipsis",
          alignItems: "center",
          "& fieldset": {
            borderColor: "rgb(229, 234, 239)", // Change the focused border color
          },
          "&:hover fieldset": {
            borderColor: "rgb(229, 234, 239)", // Change the hover border color
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--accent)", // Change the focused border color
          },
        },
        "& .MuiInputLabel-root": {
          color: "grey", // Change the unfocused label color
          fontFamily: "var(--font)",
          "&.Mui-focused": {
            color: "var(--accent)", // Change the focused label color
          },
        },
      }}
    />
  );
}
