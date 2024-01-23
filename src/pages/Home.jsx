import React, { useState } from "react";
import ChatHeader from "../components/ChatHeader";
import Sidebar from "../components/Sidebar";
import UserList from "../components/UserList";
import ChatBody from "../components/ChatBody";
import ChatInput from "../components/ChatInput";
import InfoChat from "../components/InfoChat";

const Home = () => {
  return (
    <div className="flex h-svh w-full overflow-hidden">
      <div className="flex w-96 border-r-2">
        <Sidebar />
        <UserList />
      </div>
      <div className="flex flex-1 flex-col">
        <ChatBody />
      </div>
    </div>
  );
};

export default Home;
