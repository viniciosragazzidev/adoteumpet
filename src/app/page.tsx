"use client";

import React, { useEffect } from "react";
import AboutComponent from "./components/about/about";
import ContactComponent from "./components/contact/contact";
import FooterComponent from "./components/footer/footer";
import HeaderComponent from "./components/header/header";
import ServicesComponent from "./components/servicesComponent/services";
import { setIsLoading } from "./redux/appSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(false));
  }, []);

  return (
    <main className="page w-full grid gap-5 min-h-screen px-p_page_l max-lg:px-p_page_s container mx-auto ">
      <HeaderComponent />
      <AboutComponent />
      <ServicesComponent />
      <ContactComponent />
      <FooterComponent />
    </main>
  );
}
