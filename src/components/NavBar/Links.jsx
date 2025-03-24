import Link from "next/link";

export default function Links() {
  const links = [
    { name: "Iniciar sesion", href: "/login" },
    { name: "Registrate", href: "/sign_up" },
    { name: "Beneficios", href: "/#Beneficios" },
    { name: "Servicios", href: "/#Servicios" },
  ];

  return (
    <section className="hidden space-x-6 scroll-smooth lg:flex">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="font-poppins text-base font-medium text-cstext hover:text-cs500"
        >
          {link.name}
        </Link>
      ))}
    </section>
  );
}
