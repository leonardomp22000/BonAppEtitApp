import MenuMobile from "./MenuMobile";
import Logo from "./Logo";
import Links from "./Links";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Avatar from "../common_components/Avatar";

const NavBar = ({ onToggleCanvas }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(token);
  }, []);

  const unauthenticatedMenu = [
    { text: "Iniciar sesion", icon: "" },
    { text: "Registrate", icon: "" },
    { text: "Beneficios", icon: "" },
    { text: "Servicios", icon: "" },
  ];

  return (
    <nav className="flex justify-center bg-white p-3 shadow-md md:px-14">
      <section className="mb-1 flex w-full max-w-[400px] items-center justify-between gap-1 md:min-w-[632px] md:max-w-[700px] lg:max-w-[1200px]">
        <div className="flex items-center gap-5">
          {isAuthenticated && (
            <Bars3Icon
              onClick={onToggleCanvas}
              className="h-7 w-7 text-cs500"
              strokeWidth={2}
            />
          )}
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          {!isAuthenticated && <Links />}
          {isAuthenticated ? <Avatar /> : null}

          <div
            className={clsx(
              "lg:hidden",
              { hidden: isAuthenticated },
              { "": !isAuthenticated },
            )}
          >
            <MenuMobile variant="landing" items={unauthenticatedMenu} />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
