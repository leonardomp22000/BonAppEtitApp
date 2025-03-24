export default function Avatar() {
  const User = {
    firstName: "Leonardo",
    lastName: "Meza",
  };

  let letters = [];
  let claves = Object.keys(User);
  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i];
    letters += User[clave].substring(0, 1);
  }

  return (
    <section>
      <button className="rounded-md bg-cs300 p-2 font-roboto text-lg font-normal leading-tight tracking-tight text-cs950 hover:bg-cs400 active:bg-cs600">
        {letters}
      </button>
    </section>
  );
}
