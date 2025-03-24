import digitalMenu from "../../../public/assets/OffCanvas/digitalMenu.svg";
import qrCode from "../../../public/assets/OffCanvas/qrCode.svg";
import orders from "../../../public/assets/OffCanvas/Orders.svg";
import myRestaurant from "../../../public/assets/OffCanvas/myRestaurant.svg";
import Image from "next/image";
import Logo from "../NavBar/Logo";

const menuItems = [
  {
    label: "Menu Digital",
    icon: digitalMenu,
    href: "/administration_menu",
  },
  { label: "Mis Mesas QR", icon: qrCode, href: "/qr_generator" },
  { label: "Pedidos", icon: orders, href: "/kitchen_orders" },
  {
    label: "Mi restaurante",
    icon: myRestaurant,
    href: "restaurant_configuration",
  },
];

const OffCanvas = ({ IsOpen, onClose }) => {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto bg-white p-4 transition-transform ${
          IsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        {/* Encabezado */}
        <h5 id="drawer-navigation-label">
          <Logo />
        </h5>
        {/* Botón para cerrar el drawer */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        {/* Contenido del menú */}
        <div className="overflow-y-auto py-4">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="group flex items-center p-2 font-poppins text-gray-900 hover:bg-cs50 hover:text-cs700"
                >
                  {item.icon && (
                    <div className="h-6 w-6">
                      <Image
                        alt={item.label}
                        src={item.icon}
                        height={100}
                        width={100}
                        layout="responsive"
                      />
                    </div>
                  )}
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
