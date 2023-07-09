"use client";
import { setIsLoading } from "@/app/redux/appSlice";
import { setEspecie, setEstado, setPorte } from "@/app/redux/petsSlice";
import React, { ChangeEvent, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
const BarSearch = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const idChanged = e.target.id;
    const data = e.target.value;

    setIsLoading(true);
    console.log(idChanged);

    switch (idChanged) {
      case "especie":
        dispatch(setEspecie(data));
        break;

      case "estados":
        dispatch(setEstado(data));
        break;
      case "porte":
        dispatch(setPorte(data));
        console.log("mudou");

        break;
    }
  };

  return (
    <div className="flex w-full justify-center    ">
      <span
        className="absolute right-0 top-0 mx-4 my-1 text-2xl p-2 rounded-full cursor-pointer sm:hidden z-40 "
        onClick={() => {
          setFilterOpen(!filterOpen);
        }}
      >
        <BsFilterLeft />
      </span>
      <nav
        className={`filterPetBox bg-white_custom2 sm:rounded-full sm:mt-4 rounded-md px-4 max-sm:absolute transition-all z-30 bg-curious-blue-50   ${
          filterOpen ? "max-sm:top-[0]" : "max-sm:top-[-300px]"
        }`}
      >
        <ul className="flex max-sm:flex-wrap gap-4 items-center justify-center max-sm:rounded-sm py-5 px-6 rounded-full  bg-white_custom2  ">
          <li className="text-sm flex flex-col gap-1  ">
            <label
              htmlFor="estados"
              className=" font-semibold text-curious-blue-950  pl-1"
            >
              Estado
            </label>
            <select
              name="estados"
              id="estados"
              className="w-32 py-2 px-4 rounded-full bg-white_custom cursor-pointer focus:outline-none"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="all">Todos</option>

              <option value="Rio de Janeiro">RJ</option>
              <option value="São Paulo">SP</option>
            </select>
          </li>
          <li className="text-sm flex flex-col gap-1   ">
            <label
              htmlFor="cidade"
              className=" font-semibold text-curious-blue-950  pl-1"
            >
              Especie
            </label>
            <select
              name="especie"
              id="especie"
              className="w-32 py-2 px-4 rounded-full bg-white_custom cursor-pointer focus:outline-none"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="all">Todos</option>

              <option value="Cão">Cão</option>
              <option value="Gato">Gato</option>
            </select>
          </li>
          <li className="text-sm flex flex-col gap-1   ">
            <label
              htmlFor="porte"
              className=" font-semibold text-curious-blue-950  pl-1"
            >
              Porte
            </label>
            <select
              name="porte"
              id="porte"
              className="w-32 py-2 px-4 rounded-full bg-white_custom cursor-pointer focus:outline-none"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="all">Todos</option>

              <option value="p">Pequeno</option>
              <option value="m">Médio</option>
              <option value="g">Grande</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BarSearch;
