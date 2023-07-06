import React from "react";
import Image from "next/image";

const AboutComponent = () => {
  return (
    <section
      id="about"
      className=" flex  py-10 justify-between min-h-[40vh] items-center max-sm:flex-col-reverse max-sm:gap-5"
    >
      <div className=" w-full h-full flex items-end justify-center flex-1 ">
        <div className="imgCat  max-sm:max-w-[240px] max-w-[450px]">
          <Image
            src={"/catAbout.png"}
            alt=""
            className="w-full scale-x-[-1]"
            width={582}
            height={440}
          />
        </div>
      </div>
      <div className="side h-full flex flex-col gap-10 flex-1 justify-center">
        <h1 className="text-3xl font-bold  text-carolina_blue_2">
          Quem Somos?
        </h1>

        <div className="boxAboutItem flex flex-col gap-4">
          <div className="header flex items-center text-xl font-normal gap-2 text-prussian_blue">
            <span className="">01.</span>
            <h1 className="font-bold ">O que é a Adote um Pet?</h1>
          </div>
          <span className="text-prussian_blue text-sm">
            A Adote um Amigo é uma empresa que ajuda animais de estimação a
            encontrar um lar amoroso, trabalhando com abrigos e organizações
            locais.
          </span>
        </div>

        <div className="boxAboutItem flex flex-col gap-4">
          <div className="header flex items-center text-xl font-normal gap-2 text-prussian_blue">
            <span className="">02.</span>
            <h1 className="font-bold ">Como posso adotar um animal?</h1>
          </div>
          <span className="text-prussian_blue text-sm">
            Para adotar, navegue pelos perfis de animais disponíveis em nosso
            site e preencha o formulário de adoção. Nossa equipe entrará em
            contato com você.
          </span>
        </div>

        <div className="boxAboutItem flex flex-col gap-4">
          <div className="header flex items-center text-xl font-normal gap-2 text-prussian_blue">
            <span className="">03.</span>
            <h1 className="font-bold ">Como posso ajudar a Adote um Amigo? </h1>
          </div>
          <span className="text-prussian_blue text-sm">
            Você pode ajudar com doações financeiras ou de suprimentos,
            voluntariado em eventos e compartilhando nossas postagens nas redes
            sociais.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
