"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const HeaderComponent = () => {
  return (
    <section
      id="header"
      className="w-full sm:min-h-[80vh]   sm:pt-16 max-sm:py-12  flex justify-between items-center sm:gap-20 max-lg:flex-col "
    >
      <div className="text w-full flex flex-1  justify-center  flex-col gap-8 header-left">
        <h1 className=" font-bold text-4xl text-prussian_blue max-sm:text-[1.805rem] ">
          Encontre seu companheiro perfeito!
        </h1>
        <span className="text-sm f text-prussian_blue">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut culpa
          illum ullam animi, quaerat, totam exercitationem consectetur
          adipisicing elit.
        </span>

        <div className="py-5 flex items-start gap-5 max-sm:hidden">
          <div className="flex-1 ">
            <h1 className="text-carolina_blue font-bold text-4xl">185 mil</h1>
            <span className="text-sm   text-prussian_blue">
              De animais resgatados após mals tratos no Brasil por ano.
            </span>
          </div>
          <div className="flex-1  max-sm:hidden">
            <h1 className="text-carolina_blue font-bold text-4xl">30M</h1>
            <span className="text-sm  text-prussian_blue">
              De cachorros e gatos abandonados no Brasil.
            </span>
          </div>
        </div>
        <div className="w-full text-sm max-sm:flex max-sm:items-center max-sm:text-center ">
          <div className="">
            <a
              href={"/"}
              className={`w-full px-5 py-2 bg-carolina_blue text-white font-medium rounded-md cursor-pointer transition-all hover:opacity-95`}
            >
              Quero adotar
            </a>
          </div>
        </div>
      </div>

      <div className=" h-full flex flex-1 justify-center items-center  max-sm:mt-10   header-right ">
        <div className="imgArea max-w-sm">
          <Image
            src={"/pugHero.png"}
            loading="lazy"
            alt=""
            width={4289}
            height={4289}
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
