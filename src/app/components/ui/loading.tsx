"use client";
import { setIsLoading } from "@/app/redux/appSlice";
import { RootState } from "@/app/redux/store";
import React, { useEffect } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
const LoadingComponent = () => {
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  return (
    <div
      className={` loadingComponent  w-full h-screen fixed  top-0 left-0  justify-center items-center  ${
        isLoading ? "flex" : "hidden"
      } `}
    >
      <div className="load text-white text-5xl animate-spin">
        <BiLoaderCircle />
      </div>
    </div>
  );
};

export default LoadingComponent;
