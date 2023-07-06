import { IoPawSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  styleCustom?: string;
}

const Logo = ({ styleCustom }: LogoProps) => {
  const customClass = twMerge(
    `logo  text-2xl font-bold flex gap-1 items-center ${styleCustom}`
  );
  return (
    <a href="/" className={customClass}>
      <IoPawSharp className="text-carolina_blue" />
      <span className="text-prussian_blue">
        adote
        <span className="text-carolina_blue">um</span>pet
      </span>
    </a>
  );
};

export default Logo;
