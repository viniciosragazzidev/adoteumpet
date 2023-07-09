"use client";
import { IPets, handleFavorites } from "@/app/redux/petsSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillInfoCircle,
  AiOutlineHeart,
  AiOutlineMan,
  AiOutlineWoman,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoPawSharp } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const CardsPet = () => {
  const pets = useSelector((state: RootState) => state.pets.pets);

  const dispatch = useDispatch();

  const especie = useSelector((state: RootState) => state.pets.especie);
  const estado = useSelector((state: RootState) => state.pets.estado);
  const porte = useSelector((state: RootState) => state.pets.porte);

  return (
    <div className="cards grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-5 container">
      {pets
        .filter(
          (pet) =>
            (porte === "all" || pet.porte === porte) &&
            (especie === "all" || pet.especie === especie) &&
            (estado === "all" || pet.localizacao === estado)
        )
        .map((pet) => (
          <div
            key={pet.id}
            className="cardPet w-full max-w-xs max-h-min p-2 bg-white_custom2 rounded-md flex  flex-col relative select-none"
          >
            <Link
              href={`/adote?id=${encodeURIComponent(pet.id)}`}
              className="imgBox cursor-pointer min-h-[200px] "
            >
              <span className="absolute top-0 right-0 m-4 z-30 text-curious-blue-55">
                <AiFillInfoCircle />
              </span>
              <Image
                src={pet.img}
                className="hover:scale-105 transition-all object-cover w-full h-full"
                width={750}
                height={500}
                alt=""
              />
            </Link>
            <div className="content py-3 flex items-center justify-between">
              <span className="loc text-xs flex items-center gap-1  text-curious-blue-500">
                <span className="text-lg ">
                  <HiOutlineLocationMarker />
                </span>
                <span className="text-curious-blue-950">{pet.localizacao}</span>
              </span>
              <span className="flex items-center gap-3 text-curious-blue-700">
                <div
                  className="like cursor-pointer active:scale-75 transition-transform"
                  onClick={() => {
                    dispatch(handleFavorites(pet));
                  }}
                >
                  {pet.favorited ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
                <div className="genero">
                  {pet.genero === "m" ? <AiOutlineMan /> : <AiOutlineWoman />}
                </div>
              </span>
            </div>
            <span className="px-2 font-semibold text-curious-blue-950 flex items-center gap-2">
              <IoPawSharp className="text-curious-blue-500" />
              {pet.nome}
            </span>
            <Link
              className={`w-full px-5 py-2 bg-curious-blue-500 text-white font-medium rounded-md cursor-pointer transition-all hover:opacity-95 text-center text-sm my-2`}
              href={`/adote?id=${encodeURIComponent(pet.id)}`}
            >
              Quero adotar
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CardsPet;
