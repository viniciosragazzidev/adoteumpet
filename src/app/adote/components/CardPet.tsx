import Image from "next/image";
import React from "react";

const CardPet = () => {
  return (
    <div className="card w-full max-w-xs max-h-min p-2 bg-white_custom2">
      <div className="imgBox">
        <Image src={"/dogCard.webp"} width={750} height={500} alt="" />
      </div>
    </div>
  );
};

export default CardPet;
