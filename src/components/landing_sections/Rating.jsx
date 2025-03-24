import Image from "next/image";
export default function Rating() {
  return (
    <div className="mt-7 flex flex-col items-center lg:flex-row lg:justify-start">
      <div className="flex -space-x-6">
        <Image
          src="/assets/RatingImages/pp1.svg"
          alt="User1"
          width={63}
          height={63}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/assets/RatingImages/pp2.svg"
          alt="User2"
          width={63}
          height={63}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/assets/RatingImages/pp3.svg"
          alt="User3"
          width={63}
          height={63}
          className="rounded-full border-2 border-white"
        />
      </div>
      <div className="ext-xl flex flex-col items-center font-roboto">
        <span className="font-bold text-black">Nuestros usuarios felices</span>
        <span className="font-normal text-black/50">⭐ 4.8 (450+ reviews)</span>
      </div>
    </div>
  );
}
