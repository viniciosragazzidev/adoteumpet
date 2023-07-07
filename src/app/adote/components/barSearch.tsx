"use client";
import React, { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
const BarSearch = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className="flex w-full justify-center    ">
      <span
        className="absolute right-0 top-0 mx-4 my-1 text-2xl p-2 rounded-full cursor-pointer sm:hidden z-40 bg-white_custom2"
        onClick={() => {
          setFilterOpen(!filterOpen);
        }}
      >
        <BsFilterLeft />
      </span>
      <nav
        className={`filterPetBox bg-white_custom2 sm:rounded-full sm:mt-4 rounded-md px-4 max-sm:absolute transition-all  ${
          filterOpen ? "max-sm:top-[0]" : "max-sm:top-[-300px]"
        }`}
      >
        <ul className="flex max-sm:flex-wrap gap-4 items-center justify-center max-sm:rounded-sm py-5 px-6 rounded-full  bg-white_custom2  ">
          <li className="text-sm flex flex-col gap-1  ">
            <label
              htmlFor="estados"
              className=" font-semibold text-prussian_blue  pl-1"
            >
              Estado
            </label>
            <select
              name="estados"
              id="estados"
              className="w-32 py-2 px-4 rounded-full bg-white_custom cursor-pointer focus:outline-none"
            >
              <option value="rj">RJ</option>
              <option value="sp">SP</option>
            </select>
          </li>
          <li className="text-sm flex flex-col gap-1   ">
            <label
              htmlFor="cidade"
              className=" font-semibold text-prussian_blue  pl-1"
            >
              Cidade
            </label>
            <select
              name="cidade"
              id="cidade"
              className="w-32 py-2 px-4 rounded-full bg-white_custom cursor-pointer focus:outline-none"
            >
              <option value="ni">NI</option>
              <option value="sj">SJ</option>
            </select>
          </li>
          <li className="text-sm flex flex-col gap-1   ">
            <label
              htmlFor="porte"
              className=" font-semibold text-prussian_blue  pl-1"
            >
              Porte
            </label>
            <select
              name="porte"
              id="porte"
              className="w-32 py-2 px-4 rounded-full bg-white_custom cursor-pointer focus:outline-none"
            >
              <option value="p">Pequeno</option>
              <option value="sp">SP</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BarSearch;
