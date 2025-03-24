import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import useIsTablet from "@/hooks/useIsTablet";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { codeSchema, emailSchema } from "@/hooks/validationSchemas";
import NavBar from "@/components/NavBar/NavBar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AccountVerification() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const isTablet = useIsTablet();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const endpoint =
        step === 1
          ? "http://localhost:8080/verification"
          : "http://localhost:8080/verification/validation";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setSubmitting(false);

      if (data.success) {
        if (step === 1) {
          console.log("Código de verificación enviado");
          setStep(2);
        } else {
          console.log("Código de verificación validado");
          router.push("/administration_menu");
        }
      } else {
        setErrors({ general: data.error || "Ocurrió un error inesperado" });
      }
    } catch (error) {
      setSubmitting(false);
      console.error("Error de conexión", error);
      setErrors({ general: "Error al conectar el servidor" });
    }
  };

  return (
    <main>
      <Formik
        initialValues={{ email: "", code: "" }}
        validationSchema={step === 1 ? emailSchema : codeSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form
            tittle="Verifica tu cuenta"
            subtitleTop=""
            subtitleBottom={
              step === 1
                ? "Ingresa tu correo electrónico para recibir tu código de verificación"
                : "Ingresa el código enviado a tu correo"
            }
            src="/assets/Authentication/Authentication.svg"
            alt="AuthenticationImage"
          >
            <FormikForm>
              {step === 1 && (
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
                  <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                    <ButtonContained
                      type="submit"
                      disabled={isSubmitting}
                      text={
                        isSubmitting
                          ? "Enviando..."
                          : "Enviar código de verificación"
                      }
                      showIcon={true}
                      variant="generalPoppins"
                      isArrowLeft={false}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <Field
                    name="code"
                    as={InputContained}
                    label="Código de verificación"
                    placeholder="Ingresa tu código de verificación"
                    type="text"
                  />
                  <ErrorMessage
                    name="code"
                    component="p"
                    className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                  />
                  {errors.general && (
                    <p className="font-roboto text-sm text-red-500 md:text-base lg:text-lg">
                      {errors.general}
                    </p>
                  )}
                  <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                    <ButtonContained
                      type="submit"
                      disabled={isSubmitting}
                      text={isSubmitting ? "Verificando..." : "Verificar"}
                      variant="generalPoppins"
                      showIcon={true}
                      isArrowLeft={false}
                    />
                  </div>
                </div>
              )}
            </FormikForm>
          </Form>
        )}
      </Formik>
    </main>
  );
}
