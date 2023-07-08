"use client";
import React, { ReactNode } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const NotificationComponent = () => {
  const isOpen = useSelector((state: RootState) => state.notification.isOpen);

  const message = useSelector((state: RootState) => state.notification.message);

  return (
    <div
      className={`w-full flex max-w-xs bg-white_custom2 min-h-[5rem] fixed top-0 right-0 m-5  z-50 rounded-lg p-4  gap-2 transition-all  ${
        !isOpen ? "translate-x-96" : "translate-x-[0vw] "
      } `}
    >
      <span className="text-lg p-4 w-2 h-2 flex items-center justify-center bg-white_custom2 text-green-400 notificationIcon rounded-full">
        <span>
          <AiFillCheckCircle />
        </span>
      </span>
      <div className="content flex flex-col gap-2 text-curious-blue-950">
        <span className="text-sm font-semibold">{message[0].title}</span>
        <span className="text-xs ">{message[0].description}</span>
      </div>
    </div>
  );
};

export default NotificationComponent;
