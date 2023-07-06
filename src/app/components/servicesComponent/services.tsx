import React from "react";
import Image from "next/image";
import { IoPawSharp, IoCartSharp } from "react-icons/io5";
import { MdSupport } from "react-icons/md";
import { AiFillMedicineBox } from "react-icons/ai";

const ServicesComponent = () => {
  return (
    <section
      id="services"
      className="about flex  py-10 justify-between min-h-[40vh] items-center max-sm:flex-col-reverse max-sm:gap-5"
    >
      <div className="side h-full flex flex-col gap-10 flex-1 justify-center">
        <h1 className="text-3xl max-sm:text-[1.805rem] font-bold  text-carolina_blue_2">
          Nossos serviços:
        </h1>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10">
          <div className="boxServiceItem flex flex-col gap-4 bg-white_custom2 p-5 rounded-md">
            <div className="header flex items-center  max-sm:flex-col  max-sm:text-center text-xl font-normal gap-2 text-prussian_blue">
              <span className="text-3xl">
                <IoPawSharp />
              </span>
              <h1 className="font-bold ">Adoção de animais:</h1>
            </div>
            <span className="text-prussian_blue text-sm max-sm:text-center">
              Encontre seu novo melhor amigo através da Adote um Amigo. Navegue
              pelos perfis de animais disponíveis para adoção e preencha o
              formulário para dar o primeiro passo em direção a uma vida cheia
              de amor e companheirismo.
            </span>
          </div>

          <div className="boxServiceItem flex flex-col gap-4 bg-white_custom2 p-5 rounded-md">
            <div className="header flex items-center  max-sm:flex-col  max-sm:text-center text-xl font-normal gap-2 text-prussian_blue">
              <span className="text-3xl">
                <MdSupport />
              </span>
              <h1 className="font-bold ">Apoio pós-adoção:</h1>
            </div>
            <span className="text-prussian_blue text-sm max-sm:text-center">
              Conte com o apoio da Adote um Amigo após a adoção. Oferecemos
              dicas de cuidados, treinamento e comportamento, além de suporte
              por telefone ou e-mail para ajudá-lo a se adaptar à vida com seu
              novo animal de estimação.
            </span>
          </div>

          <div className="boxServiceItem flex flex-col gap-4 bg-white_custom2 p-5 rounded-md">
            <div className="header flex items-center  max-sm:flex-col  max-sm:text-center text-xl font-normal gap-2 text-prussian_blue">
              <span className="text-3xl">
                <IoCartSharp />
              </span>
              <h1 className="font-bold ">
                Produtos para animais de estimação:
              </h1>
            </div>
            <span className="text-prussian_blue text-sm max-sm:text-center">
              Encontre tudo o que você precisa para cuidar do seu novo animal de
              estimação na loja da Adote um Amigo. Oferecemos uma ampla
              variedade de produtos, incluindo ração, brinquedos, caminhas e
              acessórios.
            </span>
          </div>
          <div className="boxServiceItem flex flex-col gap-4 bg-white_custom2 p-5 rounded-md">
            <div className="header flex items-center  max-sm:flex-col  max-sm:text-center text-xl font-normal gap-2 text-prussian_blue">
              <span className="text-3xl">
                <AiFillMedicineBox />
              </span>
              <h1 className="font-bold ">Parcerias com veterinários:</h1>
            </div>
            <span className="text-prussian_blue text-sm max-sm:text-center">
              Cuide da saúde do seu animal de estimação com as parcerias da
              Adote um Amigo com clínicas veterinárias locais. Oferecemos
              descontos e pacotes especiais para garantir que seu novo amigo
              receba os melhores cuidados.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
