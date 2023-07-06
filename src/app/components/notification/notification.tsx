import React, { ReactNode } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const NotificationComponent = () => {
  return (
    <div className=" w-full max-w-xs bg-white_custom2 min-h-[5rem] fixed top-0 right-0 m-5  z-50 rounded-lg p-4 flex gap-2">
      <span className="text-lg p-4 w-2 h-2 flex items-center justify-center bg-white_custom2 text-green-400 notificationIcon rounded-full">
        <span>
          <AiFillCheckCircle />
        </span>
      </span>
      <div className="content flex flex-col gap-2 text-prussian_blue">
        <span className="text-sm font-semibold">Mensagem enviada!</span>
        <span className="text-xs ">
          Sua mensagem foi envida e nossa equipe entrará em contato o mais
          rápido possivel.
        </span>
      </div>
    </div>
  );
};

export default NotificationComponent;
