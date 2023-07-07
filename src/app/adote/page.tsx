import CardPet from "./components/CardPet";
import BarSearch from "./components/barSearch";
const Adote = () => {
  return (
    <div className="page w-full grid gap-5  relative top-[75px]  justify-items-center px-16">
      <BarSearch />

      <section className=" px-4 flex flex-col gap-4">
        <h1 className="text-xl text-prussian_blue font-bold">
          <span className="text-carolina_blue">Pets </span>disponíveis
        </h1>

        <div className="cards grid gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-5 container">
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
        </div>
      </section>
    </div>
  );
};

export default Adote;
