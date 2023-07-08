import { setIsLoading } from "@/app/redux/appSlice";
import Link from "next/link";
import { IoPawSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  styleCustom?: string;
}

const Logo = ({ styleCustom }: LogoProps) => {
  const customClass = twMerge(
    `logo  text-2xl font-bold flex gap-1 items-center ${styleCustom}`
  );
  const dispatch = useDispatch();
  return (
    <Link
      href="/"
      className={customClass}
      onClick={() => {
        dispatch(setIsLoading(true));
      }}
    >
      <IoPawSharp className="text-curious-blue-500" />
      <span className="text-curious-blue-950">
        adote
        <span className="text-curious-blue-500">um</span>pet
      </span>
    </Link>
  );
};

export default Logo;
