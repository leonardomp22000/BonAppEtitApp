import Image from "next/image";

export default function Form({
  tittle,
  subtitleTop,
  subtitleBottom,
  children,
  src,
  alt,
}) {
  return (
    <section>
      <div className="mx-auto">
        <div className="flex w-full flex-col items-center justify-center px-4 md:px-14 lg:flex-row-reverse lg:gap-20 lg:px-0">
          <div className="my-4 w-full max-w-[400px] rounded-[20px] px-2 py-5 shadow-lg md:min-w-[500px] md:max-w-[700px] md:px-[70px] md:py-[50px]">
            <div className="mb-2 flex flex-col gap-1">
              <h6 className="font-poppins text-xs font-normal leading-3 tracking-tight text-black/50 md:mb-3 md:text-base">
                {subtitleTop}
              </h6>
              <h1 className="font-poppins text-3xl font-semibold text-black md:text-4xl lg:text-5xl">
                {tittle}
              </h1>
              <h6 className="font-poppins text-xs font-normal leading-3 tracking-tight text-black/50 md:text-base lg:text-lg lg:leading-snug lg:tracking-wide">
                {subtitleBottom}
              </h6>
            </div>

            {/**Form */}
            <div className="mt-4">{children}</div>

            {/**Fin form */}
          </div>
          {/* Punto de control. Img 2div  */}

          <div className="mx-auto w-full min-w-[100px] max-w-[320px] md:min-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
            <Image
              width={550}
              height={440}
              src={src}
              alt={alt}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
