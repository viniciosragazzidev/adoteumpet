import Image from "next/image";
import Button from "../ui/button";
const HeaderComponent = () => {
  return (
    <header className="w-full  py-6 sm:pt-16 flex justify-between items-center sm:gap-20 max-sm:flex-col ">
      <section className="text w-full flex flex-1   flex-col gap-5">
        <h1 className=" font-bold text-5xl text-prussian_blue max-sm:text-3xl ">
          Encontre seu companheiro perfeito!
        </h1>
        <span className="text-sm text-prussian_blue">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut culpa
          illum ullam animi, quaerat, totam exercitationem consectetur
          adipisicing elit.
        </span>

        <div className="py-5 flex items-start gap-5 max-sm:flex-col">
          <div className="flex-1 ">
            <h1 className="text-carolina_blue font-bold text-4xl">185 mil</h1>
            <span className="text-sm font-normal text-prussian_blue">
              De animais resgatados após mals tratos no Brasil por ano.
            </span>
          </div>
          <div className="flex-1  max-sm:hidden">
            <h1 className="text-carolina_blue font-bold text-4xl">30M</h1>
            <span className="text-sm font-normal text-prussian_blue">
              De cachorros e gatos abandonados no Brasil.
            </span>
          </div>
        </div>
        <div className="w-full text-sm max-sm:flex max-sm:justify-center max-sm:items-center max-sm:text-center ">
          <div className="">
            <a
              href={"/"}
              className={`w-full px-5 py-2 bg-carolina_blue text-white font-medium rounded-md cursor-pointer transition-all hover:opacity-95`}
            >
              Quero adotar
            </a>
          </div>
        </div>
      </section>

      <section className=" w-full h-full flex justify-center items-center  max-sm:mt-10 max-w-sm max-sm:max-w-[240px] ">
        <div className="imgArea ">
          <Image src={"/pugHero.png"} alt="" width={4289} height={4289} />
        </div>
      </section>
    </header>
  );
};

export default HeaderComponent;
