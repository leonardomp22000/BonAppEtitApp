import React from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

const StyledInput = styled(TextField)(
  ({ theme, customHeight, customWidth }) => ({
    "& .MuiInputBase-root": {
      backgroundColor: "#fff6f3",
      borderRadius: "2px",
      padding: "20px 12px",
      height: customHeight || "auto",
      width: customWidth || "300px",
      placeholder: "Ingresa tu correo",
    },
    "& .MuiInputBase-input": {
      padding: "5px",
      fontSize: "14px", // Cambiar el tamaño del texto en el input
      fontFamily: "'Poppins', sans-serif", // Cambiar el tipo de letra del texto en el input
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#888", // Cambiar el color del placeholder
      fontSize: "12px", // Cambiar el tamaño del placeholder
      fontFamily: "'Poppins', sans-serif", // Cambiar el tipo de letra del placeholder
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff6f3",
      },
      "&:hover fieldset": {
        borderColor: "#fff6f3",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  })
);

export default StyledInput;
