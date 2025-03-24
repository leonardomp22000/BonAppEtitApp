import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { loginSchema } from "@/hooks/validationSchemas";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data.success) {
        console.log("Sesion iniciada");
        const token = data.message.data?.token;
        if (token) {
          localStorage.setItem("authToken", token);
          console.log("Token guardado en local storage");
          router.push("/administration_menu");
        } else {
          setErrors({ general: "Error de autenticacion" });
        }

        // Guardar token en el navegador
      } else {
        if (data.message === "Account not verified") {
          setErrors({ general: "Cuenta no verificada. Redirigiendo..." });
          router.push("/account_verification");
        } else if (data.message === "Invalid data") {
          setErrors({ general: "Correo o contraseña incorrectos" });
        } else {
          setErrors({ general: "Ocurrio un error inesperado" });
        }
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      console.error("Error de conexion", error);
      console.log("Catch del cliente");
      setErrors({ general: "Ocurrio un error inesperado" });
    }
  };
  return (
    <main>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, isSubmitting }) => (
          <Form
            tittle="Iniciar sesión"
            subtitleTop="Bienvenido de vuelta!!"
            subtitleBottom=""
            src="/assets/Login/chef.svg"
            alt="LoginChefImage"
          >
            <FormikForm>
              <div>
                <Field
                  name="email"
                  as={InputContained}
                  label="Correo electrónico"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <label className="font-poppins text-sm font-light text-black md:text-base lg:text-lg">
                    Contraseña
                  </label>
                  <Link
                    href="/reset_password"
                    className="font-poppins text-xs text-black/50 hover:underline md:text-base lg:text-base"
                  >
                    Olvidaste tu contraseña?
                  </Link>
                </div>
                <div>
                  <Field
                    name="password"
                    as={InputContained}
                    placeholder="Ingresa tu contraseña"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                  />
                </div>
              </div>
              {errors.general && (
                <p className="font-roboto text-sm text-red-500 md:text-base lg:text-lg">
                  {errors.general}
                </p>
              )}
              <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                <ButtonContained
                  variant={"generalPoppins"}
                  text={isSubmitting ? "Enviando" : "Entrar"}
                  type="submit"
                  showIcon={true}
                  isArrowLeft={false}
                  disabled={isSubmitting}
                />
              </div>
            </FormikForm>

            <div className="flex justify-center gap-2">
              <p className="font-poppins text-xs font-normal leading-snug tracking-tight text-black/50 md:text-base">
                ¿Aun no estás registrado?
              </p>
              <Link
                className="font-poppins text-xs font-normal leading-snug tracking-tight text-cs500 hover:underline md:text-base"
                href="/sign_up"
              >
                Crear cuenta
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
