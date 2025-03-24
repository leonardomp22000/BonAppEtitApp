export default function TestimonialCard({ review, name }) {
  return (
    <section className="w-[260px]">
      <div className="relative mb-2 mt-10 h-[270px] rounded-xl bg-[#FFF1EE] px-8 pb-8 pt-[70px] shadow-md md:h-[370px] md:w-[350px] md:px-6 md:pb-11 md:pt-[93px]">
        <div className="absolute left-0 top-0 font-sans text-[190px] leading-[100px] text-cs500 md:text-[352px] md:leading-[180px] lg:text-[252px] lg:leading-[130px]">
          “
        </div>

        <div>
          {/* Texto de la reseña */}
          <p className="mb-[30px] font-roboto text-sm font-normal text-black md:mb-10 md:text-xl md:leading-7">
            {review}
          </p>

          {/* Estrellas */}
          <div className="flex justify-center">
            <div className="mb-3 flex gap-0 md:mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-9 text-[#ee9800] md:w-11"
                >
                  <path d="M12 2.25l2.974 6.016 6.626.964-4.8 4.677 1.134 6.612L12 16.894l-5.934 3.127 1.134-6.612-4.8-4.677 6.626-.964L12 2.25z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Nombre de la persona */}
          <p className="font-roboto text-sm font-semibold text-[#3f3d56] md:text-xl">
            -{name}
          </p>
        </div>
      </div>
    </section>
  );
}
