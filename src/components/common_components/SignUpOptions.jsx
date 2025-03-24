import Image from "next/image";
import Link from "next/link";

export default function SignUpOptions() {
  return (
    <div className="flex justify-center">
      <section className="flex w-[246px] flex-col gap-1 md:w-[260px]">
        <div className="flex justify-between p-2">
          <p className="font-poppins text-sm font-semibold text-black md:text-base">
            ¿Ya tienes cuenta?
          </p>
          <Link
            className="font-poppins text-sm font-semibold text-cs500 hover:underline md:text-base"
            href="/login"
          >
            Ingresar
          </Link>
        </div>
        <p className="text-center font-poppins text-xs font-semibold text-cstext md:text-sm">
          O
        </p>
        <button className="mx-auto flex w-[185px] items-center justify-center gap-3 rounded-md border border-[#ccd0d3] bg-[#fbfdfe] p-1 hover:bg-slate-100">
          <div className="w-6">
            <Image
              width={24}
              height={24}
              src="/assets/SignUp/LogoGoogle.svg"
              alt="Google"
              layout="responsive"
            />
          </div>

          <span className="font-roboto text-xs font-semibold text-[#6a6a6a] hover:underline lg:text-sm">
            Sign up with Google
          </span>
        </button>
      </section>
    </div>
  );
}
