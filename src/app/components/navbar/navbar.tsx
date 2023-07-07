"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Logo from "../ui/logo";
import Link from "next/link";
const NavbarComponent = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  return (
    <div className="w-screen fixed bg-white_custom2 z-50 border-t-8 border-t-carolina_blue">
      <nav
        className={`${styles.navbar} w-full show-bottom flex justify-between items-center px-p_page_l
        max-lg:px-p_page_s py-4   mx-auto container  top-0 left-0 `}
      >
        <Logo />
        <div
          className={`
          max-md:w-full  max-sm:text-base max-md:h-screen max-md:fixed  max-md:top-0 max-md:left-[300vw]   max-md:bg-white_custom max-md:transition-all ${
            isOpenMenu ? "max-md:translate-x-[-300vw]" : ""
          }`}
        >
          <div
            className={`${
              styles.menus
            } relative w-full h-full flex flex-col justify-center items-center max-md:gap-10  max-sm:before:bg-carolina_blue sm:before:hidden  ${
              isOpenMenu ? "before:max-md:translate-x-[-100vw]" : ""
            }`}
          >
            <span
              onClick={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
              className="hidden max-md:block absolute top-0 right-0 m-7 text-xl cursor-pointer"
            >
              <AiOutlineClose />
            </span>
            <ul className="flex items-center gap-6 max-sm:gap-10 sm:text-sm max-md:flex-col">
              {[
                ["Início", "/"],
                ["Sobre", "/#about"],
                ["Serviços", "/#services"],
                ["Contato", "/#contact"],
              ].map(([title, url]) => (
                <Link
                  key={url}
                  href={url}
                  onClick={() => {
                    setIsOpenMenu(false);
                    setCurrentPage(url);
                  }}
                  className={` text-prussian_blue transition-all  ${
                    currentPage === url
                      ? "font-bold bg-carolina_blue px-4 py-2 rounded-full text-white_custom2"
                      : "font-medium hover:text-carolina_blue "
                  }`}
                >
                  {title}
                </Link>
              ))}
            </ul>
            <div className=" items-center gap-4 sm:text-sm hidden max-sm:flex-col max-md:flex">
              <Link
                href={"/adote"}
                onClick={() => {
                  setCurrentPage("");
                  setIsOpenMenu(false);
                }}
                className={`w-full px-5 py-2 bg-carolina_blue text-white font-medium rounded-md cursor-pointer transition-all hover:opacity-95`}
              >
                Quero adotar
              </Link>
              <span className="cursor-pointer hover:scale-95  transition-all font-medium hover:text-carolina_blue">
                Entrar
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-sm max-sm:hidden">
            <Link
              href={"/adote"}
              className={`w-full px-5 py-2 bg-carolina_blue text-white font-medium rounded-md cursor-pointer transition-all hover:opacity-95`}
              onClick={() => {
                setCurrentPage("");
              }}
            >
              Quero adotar
            </Link>

            <span className="cursor-pointer hover:scale-95  transition-all font-medium hover:text-carolina_blue">
              Entrar
            </span>
          </div>
          <span
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
            className="hidden max-md:block cursor-pointer"
          >
            <FaBars />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
