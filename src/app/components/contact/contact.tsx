"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../ui/logo";
import Button from "../ui/button";
import { BsFillChatHeartFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaShareAltSquare,
} from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const ContactComponent = () => {
  const [value, setValue] = useState();

  return (
    <div className="flex flex-col py-10 gap-10 ">
      <h1 className="text-3xl text-center font-bold  text-carolina_blue_2">
        Fale com a gente:
      </h1>
      <section className="about flex  justify-between min-h-[40vh] max-sm:flex-col-reverse max-sm:gap-5">
        <div className="side h-full flex flex-col gap-10 flex-1 justify-center text-prussian_blue">
          <header>
            <Logo />
          </header>

          <nav>
            <ul className="flex flex-col gap-10">
              <li className="flex items-start gap-5">
                <div className="icon text-3xl text-carolina_blue">
                  <BsFillChatHeartFill />
                </div>
                <div className="content flex flex-col gap-2">
                  <h3 className="font-bold text-base">Converse com a gente</h3>
                  <span className="text-sm">
                    Nosso time estará sempre aqui para te ajudar.
                  </span>
                  <span className="py-2 ">
                    <a
                      href={"/"}
                      className={`w-full px-5 py-2 bg-carolina_blue text-white font-medium text-sm rounded-md cursor-pointer transition-all hover:opacity-95`}
                    >
                      Iniciar chat{" "}
                    </a>
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="icon text-3xl text-carolina_blue">
                  <RiWhatsappFill />
                </div>
                <div className="content flex flex-col gap-2">
                  <h3 className="font-bold text-base">Estamos no Whatsapp</h3>
                  <span className="text-sm">
                    Entre em contato pelo whatsapp e nossa equipe te responderá
                    o mais rapido possível
                  </span>
                  <a
                    href="/"
                    className="py-2 font-bold text-sm hover:text-carolina_blue transition-all"
                  >
                    (21) 99999-8888
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className=" w-7 h-7 clampb">
                  <div className="icon text-3xl w-full h-full flex items-center overflow-hidden  justify-center rounded-full  text-carolina_blue ">
                    <FaShareAltSquare className="w-[120%]" />
                  </div>
                </div>
                <div className="content flex flex-col gap-2">
                  <h3 className="font-bold text-base">Nossas redes sociais</h3>
                  <span className="text-sm">
                    Encontre a gente nas redes mais próximas.
                  </span>
                  <span className="py-2 flex items-center gap-4 text-3xl">
                    <span className="overflow-hidden rounded-full">
                      <FaInstagramSquare className="cursor-pointer hover:" />
                    </span>
                    <span className="overflow-hidden rounded-full">
                      <FaSquareTwitter className="cursor-pointer hover:" />
                    </span>
                    <span className="overflow-hidden rounded-full">
                      <FaFacebookSquare className="cursor-pointer hover:" />
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="side h-full flex flex-col gap-10 flex-1  p-4 px-7 rounded-lg">
          <div className="form">
            <form className="flex flex-col gap-10">
              <div className="formArea flex flex-col gap-1">
                <label
                  htmlFor="nome"
                  className="font-semibold text-prussian_blue"
                >
                  Nome
                </label>
                <div className="inputArea w-full h-10 border-b border-blue-200 ">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full h-full bg-transparent focus:outline-none focus:border-b focus:border-b-carolina_blue"
                  />
                </div>
              </div>
              <div className="formArea flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="font-semibold text-prussian_blue"
                >
                  Email
                </label>
                <div className="inputArea w-full h-10 border-b border-blue-200 ">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full h-full bg-transparent focus:outline-none focus:border-b focus:border-b-carolina_blue"
                  />
                </div>
              </div>
              <div className="formArea flex flex-col gap-1">
                <label
                  htmlFor="text"
                  className="font-semibold text-prussian_blue"
                >
                  Telefone
                </label>
                <div className="inputArea formNumber w-full h-10 border-b border-blue-200 ">
                  <input
                    type="email"
                    placeholder="Seu telefone"
                    className="w-full h-full bg-transparent focus:outline-none focus:border-b focus:border-b-carolina_blue"
                  />
                </div>
              </div>

              <div className="formArea flex flex-col gap-1">
                <label
                  htmlFor="text"
                  className="font-semibold text-prussian_blue"
                >
                  Telefone
                </label>
                <div className="inputArea formNumber w-full h-10 border-b border-blue-200 ">
                  <input
                    type="email"
                    placeholder="Seu telefone"
                    className="w-full h-full bg-transparent focus:outline-none focus:border-b focus:border-b-carolina_blue"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
