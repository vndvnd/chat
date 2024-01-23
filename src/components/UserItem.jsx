import React from "react";

import avatarUser from "../assets/avatar-user.svg";

const BoxChat = () => {
  return (
    <li className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-200">
      <img className="rounded-full object-cover pr-2" src={avatarUser} alt="" />
      <div className="">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Mì tôm thanh long</h3>
          <span className="text-xs font-normal text-[#707991]">1:40</span>
        </div>
        <p className=" max-w-56  truncate text-sm font-normal text-[#707991]">
          Lần đầu tiên, trái thanh long Lorem ipsum dolor, sit amet consectetur
        </p>
      </div>
    </li>
  );
};

export default BoxChat;
