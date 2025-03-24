import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StyledButton = ({ text, disabled, tailwindClasses }) => {
  // Crear el botón utilizando Tailwind y Material UI styled
  const CustomStyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main, // Color de fondo (con opción a personalizar)
    color: theme.palette.primary.contrastText, // Color del texto
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "0.75rem",
    textTransform: "none",
    padding: "8px 12px", // Padding del botón (puede ser personalizado)
    borderRadius: "2px", // Radio de borde redondeado
    border: "none", // Eliminar bordes predeterminados
    cursor: "pointer",
    fontSize: "12px",
    transition: "background-color 0.3s ease", // Transición suave para hover
    "&:hover": {
      backgroundColor: theme.palette.primary.hover, // Color de hover (personalizable)
    },
    "&:active": {
      backgroundColor: theme.palette.primary.active, // Color de hover (personalizable)
    },
    "&:disabled": {
      backgroundColor: "#9CA3AF", // Color de fondo deshabilitado
      cursor: "not-allowed",
    },
  }));

  // Botón funcional con clases Tailwind adicionales

  return (
    <CustomStyledButton
      className={[tailwindClasses, "h-4 text-xs"]}
      disabled={disabled}
    >
      {text}
    </CustomStyledButton>
  );
};

export default StyledButton;
