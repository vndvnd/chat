import React from "react";
import avatar from "../assets/Avatar.png";
import iconBell from "../assets/bell-02.svg";
import iconHome from "../assets/home-04.svg";
import iconMes from "../assets/chat.svg";
import iconContinue from "../assets/next.svg";
import iconSetting from "../assets/settings.svg";

const Sidebar = () => {
  return (
    <div className="flex min-w-14 flex-col items-center justify-between bg-[#020386] pb-5 pt-4">
      <div className="relative">
        <img className="size-10 " src={avatar} alt="" />
        <img
          className="absolute -right-4 top-3 z-10"
          src={iconContinue}
          alt=""
        />
      </div>
      <div className="flex  flex-col items-center justify-center gap-4">
        <img className="size-10" src={iconHome} alt="" />
        <img className="size-12" src={iconMes} alt="" />
        <img className="size-10" src={iconBell} alt="" />
      </div>
      <div>
        <img className="size-10" src={iconSetting} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
