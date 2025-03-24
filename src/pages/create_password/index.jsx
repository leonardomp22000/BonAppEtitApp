import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import NavBar from "@/components/NavBar/NavBar";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { passwordVerificationSchema } from "@/hooks/validationSchemas";
import { useRouter } from "next/router";

export default function CreatePassword() {
  const router = useRouter();
  const handleCreatePassword = async (values, { setSubmitting, setErrors }) => {
    const token = localStorage.getItem("resetToken");
    if (!token) {
      console.log("No se encontro un token valido, intenta de nuevo");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:8080/verification/reset_password",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Pasar el token temporal
          },
          body: JSON.stringify({
            password: values.password,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrors({ general: errorData.message || "Error desconocido" });
        return;
      }

      // Redirigir al usuario después de cambiar la contraseña
      router.push("/login");
    } catch (error) {
      console.error("Error cambiando la contraseña:", error);
      setErrors({ general: "Hubo un problema, intenta de nuevo más tarde." });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main>
      <Formik
        initialValues={{ password: "", passwordConfirmation: "" }}
        validationSchema={passwordVerificationSchema}
        onSubmit={handleCreatePassword}
      >
        {({ isSubmitting, errors }) => (
          <Form
            tittle="Crear nueva contraseña"
            subtitleTop=""
            subtitleBottom=""
            src="/assets/CreatePassword/createPassword.svg"
            alt="createPasswordImage"
          >
            <FormikForm>
              <div>
                <Field
                  label="Contraseña"
                  name="password"
                  as={InputContained}
                  placeholder="Ingresa tu contraseña"
                  type="password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div>
                <Field
                  label="Confirma tu contraseña"
                  name="passwordConfirmation"
                  as={InputContained}
                  placeholder="Confirma tu nueva contraseña"
                  type="password"
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              {errors.general && (
                <p className="font-roboto text-sm text-red-500 md:text-base lg:text-lg">
                  {errors.general}
                </p>
              )}

              <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                <ButtonContained
                  variant={"generalPoppins"}
                  showIcon={true}
                  type="submit"
                  isArrowLeft={false}
                  text={isSubmitting ? "Guardando..." : "Guardar y entrar"}
                ></ButtonContained>
              </div>
            </FormikForm>
          </Form>
        )}
      </Formik>
    </main>
  );
}
