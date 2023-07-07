import BarSearch from "./components/barSearch";
const Adote = () => {
  return (
    <div className="page w-full grid gap-5  relative top-[75px]">
      <BarSearch />

      <section className=" px-4">
        <h1 className="text-xl text-prussian_blue font-bold">
          <span className="text-carolina_blue">Pets </span>disponíveis
        </h1>
      </section>
    </div>
  );
};

export default Adote;
