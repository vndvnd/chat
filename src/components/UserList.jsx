import React from "react";

import BoxChat from "./UserItem";
import addSquare from "../assets/add-square-03.svg";
import iconSearch from "../assets/icon-search.svg";

const GroupChat = () => {
  return (
    <div className="flex w-full flex-col pt-4  ">
      <div className="flex items-center justify-between px-4">
        <div className="flex h-[40px] w-[200px] items-center rounded-3xl bg-[#F5F5F5] p-4">
          <img
            className="mr-1  size-5 select-none opacity-50"
            src={iconSearch}
            alt=""
          />
          <input
            className="
        bg-transparent
         outline-none"
            type="text"
            placeholder="Search for chat box..."
          />
        </div>
        <img src={addSquare} alt="" />
      </div>
      <nav className="w-full flex-1 overflow-y-auto ">
        <ul>
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
          <BoxChat />
        </ul>
      </nav>
    </div>
  );
};

export default GroupChat;
