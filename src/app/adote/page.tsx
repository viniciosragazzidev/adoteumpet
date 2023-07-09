"use client";
import { useDispatch } from "react-redux";
import FooterComponent from "../components/footer/footer";
import CardsPet from "./components/CardsPet";
import BarSearch from "./components/barSearch";
import { useEffect } from "react";
import { setIsLoading } from "../redux/appSlice";
import ModalInfoPet from "./components/ModalInfoPet";
const Adote = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(false));
  }, []);
  return (
    <div className="page w-full   grid gap-5  relative top-[75px]  justify-items-center px-16 max-sm:px-5">
      <BarSearch />
      <ModalInfoPet />
      <section className=" px-4 flex flex-col gap-4">
        <h1 className="text-xl text-curious-blue-950 font-bold">
          <span className="text-curious-blue-500">Pets </span>disponíveis:
        </h1>

        <div className="w-full">
          <CardsPet />
        </div>
        <FooterComponent />
      </section>
    </div>
  );
};

export default Adote;
