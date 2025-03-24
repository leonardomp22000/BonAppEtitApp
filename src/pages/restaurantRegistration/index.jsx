import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import SignUpOptions from "@/components/common_components/SignUpOptions";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { registerSchema } from "@/hooks/validationSchemas";
import NavBar from "@/components/NavBar/NavBar";
import { useRouter } from "next/router";
import UploadImageCard from "@/components/common_components/UploadImageCard";

export default function RestaurantRegistration() {
  const router = useRouter();
  // Definición de la función handleSignUp
  const handleSignUp = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setSubmitting(false); // Finaliza el estado de envio del formulario
      if (data.success) {
        console.log("Datos guardados en la DB");
        router.push("/account_verification");
      } else {
        console.log("Algo paso");
        // Si hay un error, muestra el mensaje en el formulario
        setErrors({ general: data.message || "Ocurrió un error inesperado" });
      }
    } catch (error) {
      setSubmitting(false);
      console.error("Error de conexión:", error);
      setErrors({ general: "Error al conectar con el servidor" });
    }
  };

  return (
    <main>
      <Formik
        initialValues={{
          restaurantName: "",
          restaurantAdress: "",
          name: "",
          lastName: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleSignUp} // Asegúrate de que handleSignUp está bien definido y pasado correctamente
      >
        {({ handleSubmit, isSubmitting, errors }) => (
          <Form
            tittle="Registra tu restaurante"
            subtitleTop=""
            subtitleBottom=""
            src="/assets/RestaurantRegistration/Restaurant.svg"
            alt="Restaurant"
          >
            <FormikForm onSubmit={handleSubmit}>
              <div>
                <Field
                  name="restaurantName"
                  as={InputContained}
                  label="Nombre del restaurante o marca*"
                  placeholder="Ingresa el nombre de tu restaurante "
                  type="text"
                />
                <ErrorMessage
                  name="restaurantName"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>
              <div>
                <Field
                  name="restaurantAdress"
                  as={InputContained}
                  label="Direccion"
                  placeholder="Ingresa la direccion de tu restaurante"
                  type="text"
                />
                <ErrorMessage
                  name="restaurantAdress"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div>
                <Field
                  name="restaurantPhone"
                  as={InputContained}
                  label="Telefono"
                  placeholder="Ingresa el numero de telefono de tu restaurante"
                  type="text"
                />
                <ErrorMessage
                  name="restaurantPhone"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div>
                <Field
                  name="restaurantTables"
                  as={InputContained}
                  label="No.mesas (QR code)"
                  placeholder="Ingresa el numero de mesas que tiene tu restaurante"
                  type="password"
                />
                <ErrorMessage
                  name="restaurantTables"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>
              <div className="mb-2 mt-2">
                <UploadImageCard text="Sube el logo de tu restaurante"></UploadImageCard>
              </div>

              <p className="font-poppins text-xs font-light text-black">
                Campos obligatorios *
              </p>

              {/* Mensaje general de error */}
              {errors.general && (
                <p className="font-roboto text-sm text-red-500 md:text-base lg:text-lg">
                  {errors.general}
                </p>
              )}

              <div className="mb-5 mt-5 flex justify-center lg:mb-3">
                <ButtonContained
                  variant="generalPoppins"
                  type="submit"
                  text={isSubmitting ? "Cargando..." : "Registrarse"}
                  showIcon={true}
                  isArrowLeft={false}
                  disabled={isSubmitting} // Desactiva el botón mientras se procesa el envío
                />
              </div>

              <SignUpOptions />
            </FormikForm>
          </Form>
        )}
      </Formik>
    </main>
  );
}
