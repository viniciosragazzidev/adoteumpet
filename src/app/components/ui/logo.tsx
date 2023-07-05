"use serverside";
import { IoPawSharp } from "react-icons/io5";

const Logo = () => {
  return (
    <a href="/" className="logo  text-2xl font-bold flex gap-1 items-center">
      <IoPawSharp className="text-carolina_blue" />
      <span className="text-prussian_blue">
        adote
        <span className="text-carolina_blue">um</span>pet
      </span>
    </a>
  );
};

export default Logo;
