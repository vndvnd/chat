import React from "react";
import avatarUser from "../assets/avatar-user.svg";
import arrowBottom from "../assets/arrow-bottom.svg";

const InfoChat = () => {
  return (
    <div className="w-96 p-6 shadow-md">
      <div className="m-2 flex flex-col items-center justify-center">
        <img className="size-20" src={avatarUser} alt="" />
        <h2 className="text-xl font-bold">Báo UI</h2>
        <span className="font text-sm text-[#5A6277CC]">Active now</span>
      </div>
      <div className="flex cursor-pointer justify-between py-1">
        <p>Customize chat</p>
        <img src={arrowBottom} alt="" />
      </div>
      <div className="mt-1 flex cursor-pointer justify-between py-1">
        <p>Members in the chat</p>
        <img src={arrowBottom} alt="" />
      </div>
    </div>
  );
};

export default InfoChat;
