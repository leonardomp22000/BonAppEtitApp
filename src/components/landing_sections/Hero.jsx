import Image from "next/image";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Rating from "./Rating";
import Link from "next/link";
export default function HeroSection() {
  const theme = useTheme();
  const recomendations = useMediaQuery("(min-width:1200px)");
  //#FFF1ED Color Fix
  return (
    <section className="flex justify-center p-4 lg:bg-white lg:py-24">
      {/* Contenedor exterior que extiende el fondo */}

      <div className="sm:max-w-96 md:max-w-3xl md:px-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-evenly lg:px-[40px]">
        <div className="lg:flex lg:flex-col">
          {/**Title and subtittle */}
          <div className="mb-8 flex flex-col gap-4 text-black xs:text-center sm:text-center md:mt-8 md:text-center lg:mb-12 lg:gap-4 lg:text-left">
            <h1 className="font-roboto text-3xl font-bold md:font-poppins md:text-5xl lg:font-roboto lg:text-[64px]">
              Ordena fácilmente, disfruta rápidamente
            </h1>
            <p className="font-roboto text-base font-normal md:text-xl lg:text-2xl">
              Ordena lo que te gusta en pocos pasos y disfruta de tu comida sin
              esperar.
            </p>
          </div>
          {/** Button and recomendations */}

          <div className="mb-10 flex justify-center lg:justify-start">
            <Link href="/sign_up" passHref>
              <Button
                variant="contained"
                sx={{
                  [theme.breakpoints.up("lg")]: {
                    borderRadius: "45px",
                    py: "18px",
                    px: "32px",
                    fontSize: "1rem",
                    fontWeight: "700",
                  },
                  [theme.breakpoints.between("md", "lg")]: {
                    py: "12px",
                    px: "32px",
                    borderRadius: "45px",
                    fontSize: "1rem",
                    fontWeight: "700",
                  },
                  [theme.breakpoints.between("sm", "md")]: {
                    py: "12px",
                    px: "32px",
                    borderRadius: "45px",
                    fontSize: "1rem",
                    fontWeight: "700",
                  },
                  [theme.breakpoints.down("sm")]: {
                    py: "12px",
                    px: "32px",
                    borderRadius: "45px",
                    fontSize: "1rem",
                    fontWeight: "700",
                  },
                }}
              >
                ¡Solicita una demo!
              </Button>
            </Link>
          </div>

          {recomendations && <Rating />}
        </div>

        {/* Right Side: Chef Image */}
        <div className="mx-auto h-auto w-80 md:w-[550px] lg:w-[950px]">
          <Image
            width={550}
            height={440}
            src="/assets/first.svg"
            alt="Chef"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}
