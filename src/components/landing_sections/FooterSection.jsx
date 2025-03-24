export default function Footer() {
  return (
    //cs500 Change color
    <section className="flex justify-center bg-white">
      <footer className="flex w-[328px] justify-between py-2 font-roboto text-[8px] text-cs500 md:w-[632px] md:py-3 md:text-base md:leading-normal lg:w-[1200px] lg:py-5 lg:text-lg">
        <p>Copyright © 2024 Bonappetit. All rights reserved</p>

        <div className="flex gap-1 md:gap-2 lg:gap-5">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Term of Use
          </a>
          <a href="#" className="hover:underline">
            Partner
          </a>
        </div>
      </footer>
    </section>
  );
}
