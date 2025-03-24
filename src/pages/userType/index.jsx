import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/common_components/MainLayout";
import UserTypeCard from "@/components/userType/UserTypeCard";
import ButtonUserTypeCard from "@/components/userType/ButtonUserTypeCard";
export default function UserType() {
  return (
    <main>
      <MainLayout>
        <div className="lg:mx-auto lg:mt-8 lg:w-[1023px]">
          <UserTypeCard>
            <h1 className="font-poppins text-[28px] font-semibold text-black md:text-4xl lg:text-5xl">
              ¡Bienvenido!
            </h1>
            <p className="font-poppins text-sm font-normal leading-snug tracking-wide text-black/50 md:text-lg lg:mt-2 lg:text-2xl">
              Para comenzar con tu registro cuentanos un poco de ti
            </p>

            <section className="mt-9 flex gap-2 md:gap-16">
              <ButtonUserTypeCard userType="restaurant" />
              <ButtonUserTypeCard userType="comensal" />
            </section>
          </UserTypeCard>
        </div>
      </MainLayout>
    </main>
  );
}
