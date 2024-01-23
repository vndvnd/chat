import React, { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";

import iconSend from "../assets/icon-send.svg";
import InfoChat from "./InfoChat";

const ChatBody = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);
  const inputFocus = useRef(null);

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
    inputFocus.current.focus();
  }, [messages]);

  return (
    <div className="flex w-full">
      <div className="flex h-screen w-full flex-col">
        <ChatHeader toggleInfo={toggleInfo} />

        <div
          className=" flex-1  overflow-y-auto px-9 py-4 "
          ref={chatContainerRef}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 rounded-3xl  bg-[#02038612] px-3 py-[10px]  ${
                message.sender === "user"
                  ? "bg-[#020386A6] text-right text-white"
                  : "text-left text-[#383C48]"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="my-6 flex h-10 justify-between space-x-4 px-9">
          <input
            type="text"
            ref={inputFocus}
            placeholder="Write your mesages..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className=" flex-1 rounded-3xl border border-[#020386] p-2 outline-none"
          />
          <button
            onClick={sendMessage}
            className=" rounded-full bg-blue-500 p-2 text-white"
          >
            <img className="size-6" src={iconSend} alt="" />
          </button>
          <button
            className=" bg-green-500 p-2 text-white"
            onClick={() =>
              setMessages([...messages, { text: "Hello", sender: "Duy" }])
            }
          >
            Demo
          </button>
        </div>
      </div>
      {showInfo && <InfoChat />}
    </div>
  );
};

export default ChatBody;
