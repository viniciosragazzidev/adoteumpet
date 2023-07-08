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
import FormularioComponent from "../formulario/formularioComponent";
const ContactComponent = () => {
  return (
    <section id="contact" className="flex flex-col  pt-24 gap-10 sm:gap-15 ">
      <h1 className="text-3xl max-sm:text-[1.805rem] text-center font-bold  text-curious-blue-500_2">
        <span className="text-curious-blue-950"> Fale com</span> a gente:
      </h1>
      <section className="about flex  justify-between items-start min-h-[40vh] max-sm:flex-col-reverse max-sm:gap-14">
        <div className="side  w-full h-full flex flex-col gap-10 flex-1  text-curious-blue-950">
          <header>
            <Logo />
          </header>
          {/* ola */}
          <nav>
            <ul className="flex flex-col gap-10">
              <li className="flex items-start gap-5">
                <div className="icon text-3xl text-curious-blue-500">
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
                      className={`w-full px-5 py-2 bg-curious-blue-500 text-white font-medium text-sm rounded-md cursor-pointer transition-all hover:opacity-95`}
                    >
                      Iniciar chat{" "}
                    </a>
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="icon text-3xl text-curious-blue-500">
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
                    className="py-2 font-bold text-sm hover:text-curious-blue-500 transition-all self-start"
                  >
                    (21) 99999-8888
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className=" w-7 h-7 clampb">
                  <div className="icon text-3xl w-full h-full flex items-center overflow-hidden  justify-center rounded-full  text-curious-blue-500 ">
                    <FaShareAltSquare className="w-[120%]" />
                  </div>
                </div>
                <div className="content flex flex-col gap-2">
                  <h3 className="font-bold text-base">Nossas redes sociais</h3>
                  <span className="text-sm">
                    Encontre a gente nas redes mais próximas.
                  </span>
                  <span className="py-2 flex items-center gap-4 text-2xl">
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
        <div className="side w-full h-full flex flex-col gap-10 flex-1  p-4 sm:px-7 rounded-lg">
          <div className="form">
            <FormularioComponent />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactComponent;
