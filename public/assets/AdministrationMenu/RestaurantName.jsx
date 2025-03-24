export default function RestauranName({ restauranName, userName }) {
  return (
    <section className="font-semibold">
      <h1 className="font-poppins text-lg leading-7 tracking-tight text-cs900 md:text-[28px] lg:text-[40px]">
        {restauranName}
      </h1>
      <h5 className="font-poppins text-xs text-black md:mt-1 md:text-lg lg:mt-2">
        {` ¡Hola ${userName}, Bienvenido!`}
      </h5>
    </section>
  );
}
