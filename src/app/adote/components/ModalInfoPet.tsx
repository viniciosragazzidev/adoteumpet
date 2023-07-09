import { IPets, handleFavorites } from "@/app/redux/petsSlice";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMan,
  AiOutlineWoman,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoPawSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const ModalInfoPet = () => {
  const pets = useSelector((state: RootState) => state.pets.pets);
  const [currentPet, setCurrentPet] = useState<IPets[]>([]);
  const [modalClosed, setModalClosed] = useState(true);
  const paramsId = useSearchParams();
  const dispatch = useDispatch();
  const id = paramsId.get("id");

  const getInfosByPet = async (id: string) => {
    setCurrentPet(pets.filter((pet) => pet.id === Number(id)));
    setModalClosed(false);
  };

  useEffect(() => {
    if (id) {
      getInfosByPet(id);
    }
  }, [id, pets]);

  const router = useRouter();
  const handleCloseModal = () => {
    router.replace("/adote");
  };

  return (
    <div
      className={`modal w-full min-h-screen top-0 left-0 fixed   px-4  justify-center items-center ${
        modalClosed ? "hidden" : "flex"
      }`}
    >
      {currentPet[0] ? (
        <div className="content relative w-full h-screen max-w-md max-h-[85vh] bg-curious-blue-100 rounded-lg sm:p-5 p-3 flex flex-col items-center">
          <span
            className="absolute top-0 right-0 m-4 cursor-pointer"
            onClick={() => {
              handleCloseModal();
              setModalClosed(true);
            }}
          >
            <AiOutlineClose />
          </span>
          <div className="modalImagePetArea overflow-hidden flex items-center justify-center max-w-sm rounded-lg">
            <Image
              src={currentPet[0].img}
              className=" "
              width={750}
              height={500}
              alt=""
            />
          </div>
          <div className="self-start w-full pt-4">
            <span className=" text-sm font-semibold text-curious-blue-900 flex items-center gap-1 ">
              <span className="text-xl text-curious-blue-500">
                <HiOutlineLocationMarker />
              </span>
              {currentPet[0].localizacao}
            </span>
            <ul className=" flex flex-col gap-3 pt-4">
              <li className=" w-full flex justify-between items-center">
                <div className="flex items-center text-2xl gap-2">
                  <IoPawSharp className="text-curious-blue-500" />

                  <span className="name  font-semibold text-curious-blue-800">
                    {currentPet[0].nome}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-3 text-curious-blue-700">
                    <div
                      className="like cursor-pointer active:scale-75 transition-transform"
                      onClick={() => {
                        dispatch(handleFavorites(currentPet[0]));
                      }}
                    >
                      {currentPet[0].favorited ? (
                        <AiFillHeart />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </div>
                    <div className="genero">
                      {currentPet[0].genero === "m" ? (
                        <AiOutlineMan />
                      ) : (
                        <AiOutlineWoman />
                      )}
                    </div>
                  </span>
                </div>
              </li>

              <li className="flex items-center justify-between gap-2">
                <div className=" flex items-center gap-2">
                  <span className="text-lg text-curious-blue-500 font-semibold">
                    Raça:
                  </span>
                  <span>{currentPet[0].raca}</span>
                </div>
                <div className=" flex items-center gap-2">
                  <span className="text-lg text-curious-blue-500 font-semibold">
                    Porte:
                  </span>
                  <span>
                    {currentPet[0].porte === "p"
                      ? "Pequeno"
                      : currentPet[0].porte === "m"
                      ? "Médio"
                      : "Grande"}
                  </span>
                </div>
              </li>

              <li className="flex items-center justify-between gap-2">
                <div className=" flex items-center gap-2">
                  <span className="text-lg text-curious-blue-500 font-semibold">
                    Idade:
                  </span>
                  <span>{currentPet[0].idade}</span>
                </div>
                <div className=" flex items-center gap-2">
                  <span className="text-lg text-curious-blue-500 font-semibold">
                    Peso:
                  </span>
                  <span>{currentPet[0].peso} Kg</span>
                </div>
              </li>
              <Link
                className={`w-full px-5 py-2 bg-curious-blue-500 text-white font-medium rounded-md cursor-pointer transition-all hover:opacity-95 text-center text-sm my-2`}
                href={`/adote?id=${encodeURIComponent(currentPet[0].id)}`}
              >
                Quero adotar
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalInfoPet;
