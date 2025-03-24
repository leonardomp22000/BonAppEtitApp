import clsx from "clsx";

export default function MainLayout({
  children,
  appyDefaultConfiguration = true,
}) {
  return (
    <section
      className={`${
        appyDefaultConfiguration
          ? "mt-2 flex min-h-dvh justify-center px-3 pb-4 md:mt-3 md:px-14"
          : ""
      }`}
    >
      <div
        className={`flex w-full flex-col ${
          appyDefaultConfiguration
            ? "max-w-[400px] px-2 md:min-w-[632px] md:max-w-[700px] lg:max-w-[1200px]"
            : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}
