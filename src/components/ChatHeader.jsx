import React from "react";

import avatarUser from "../assets/avatar-user.svg";
import iconInfoChat from "../assets/info-chat.svg";

const ChatHeader = ({ toggleInfo }) => {
  return (
    <header className="flex h-14 items-center justify-between bg-[#020386] p-2">
      <div className="flex ">
        <img className="" src={avatarUser} alt="" />
        <div className="pl-2 text-white">
          <h2>Báo UI</h2>
          <span>Active now</span>
        </div>
      </div>
      <div onClick={toggleInfo} className="cursor-pointer p-2">
        <img className="size-6" src={iconInfoChat} alt="" />
      </div>
    </header>
  );
};

export default ChatHeader;
