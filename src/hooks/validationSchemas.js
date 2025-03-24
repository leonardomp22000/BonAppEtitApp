// validationSchemas.js
import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña requerida"),
});

export const registerSchema = Yup.object({
  name: Yup.string().required("Nombre de usuario requerido"),
  lastName: Yup.string().required("Apellido requerido"),
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña requerida"),
});

export const codeSchema = Yup.object({
  code: Yup.string()
    .required("Codigo de verificacion requerido")
    .length(6, "El codigo debe ser de 6 digitos"),
});

export const emailSchema = Yup.object({
  email: Yup.string().email("Correo invalido").required("Correo requerido"),
});

export const passwordVerificationSchema = Yup.object({
  password: Yup.string()
    .required("Contraseña requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  passwordConfirmation: Yup.string()
    .required("Contraseña requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir"),
});
