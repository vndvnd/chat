import React from "react";
import { Link } from "react-router-dom";

import around from "../assets/around.png";
import phone from "../assets/phone.png";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import continueIcon from "../assets/continue.svg";

const Welcome = () => {
  return (
    <div className=" flex flex-col overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-600 text-white">
      <header className="px-12 pt-12">
        <nav>
          <ul className="flex items-center justify-end space-x-7 text-2xl font-bold">
            <li className="w-[123px] rounded-[50px] border p-4 text-center hover:opacity-80">
              <Link to={""}>Home</Link>
            </li>
            <li className="border-l-2">
              <span className="border-r-2 border-white"></span>
            </li>
            <li className="hover:opacity-80">
              <Link to={"/login"}>Sign In</Link>
            </li>
            <li className="w-[123px] rounded-lg bg-[#4E69FF] p-4 text-center hover:opacity-80">
              <Link to={"/signup"}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="px-24 pt-24">
        <div className="flex justify-between">
          <div className="z-40">
            <h1 className="text-[65px] font-semibold">
              Welcome to the
              <span className="block bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-[85px] font-bold leading-tight text-transparent">
                Chatting
                <br />
                App!
              </span>
            </h1>
            <button className="relative mt-20 w-60 rounded-[50px] bg-gradient-to-r from-orange-200 to-amber-300 p-5 text-3xl font-semibold text-black shadow transition ease-out hover:scale-105">
              Get Start
              <div className="absolute -top-3 right-3 h-7 w-7 rounded-full bg-[#FFDF9F] hover:animate-ping"></div>
            </button>
          </div>
          <div className="relative w-2/3">
            <img className="absolute right-0 top-0 z-0" src={around} alt="" />
            <div className="absolute right-0 top-0 z-10 h-[50rem] w-[50rem] rounded-full bg-[#020386] opacity-75 blur-3xl"></div>
            <img className="absolute right-0 top-16 z-20" src={phone} alt="" />
          </div>
        </div>
        <div className="relative flex flex-col items-center pt-52">
          <div className="absolute -z-0 h-[40rem] w-[40rem] rounded-full bg-[#dB9FFF] opacity-50 blur-3xl"></div>
          <img
            className="z-10 w-[70px] motion-reduce:animate-bounce"
            src={continueIcon}
            alt=""
          />
          <h2 className="z-10 mb-[70px] mt-24 text-[35px] font-bold">
            About the app
          </h2>
          <div className="z-10 flex items-center justify-evenly">
            <img className="object-contain" src={about1} alt="" />
            <div className="w-1/3">
              <h3 className="mb-[50px] text-center text-[35px] font-bold uppercase text-[#FFC451]">
                Efficient Communication
              </h3>
              <p className="text-center text-[30px] font-normal italic tracking-tight">
                The chatting app facilitates efficient communication, enabling
                quick and easy connections with friends and family.
              </p>
            </div>
          </div>
          <div className="mt-28 flex items-center justify-evenly">
            <div className="w-1/3">
              <h3 className="mb-[50px] text-center text-[35px] font-bold uppercase text-[#FFC451]">
                Global Connectivity
              </h3>
              <p className="text-center text-[30px] font-normal italic tracking-tight">
                With global connectivity, the chat app lets you meet and
                communicate with people worldwide.
              </p>
            </div>
            <img className="object-contain" src={about2} alt="" />
          </div>
          <div className="mt-28 flex items-center justify-evenly">
            <img className="object-contain" src={about3} alt="" />
            <div className="w-1/3">
              <h3 className="mb-[50px] text-center text-[35px] font-bold uppercase text-[#FFC451]">
                Safety and Security
              </h3>
              <p className="text-center text-[30px] font-normal italic tracking-tight">
                We prioritize safety and security, using advanced methods to
                safeguard your personal information.
              </p>
            </div>
          </div>
          <button className="mb-[70px] mt-24 rounded-[50px] bg-gradient-to-r from-blue-200 to-purple-300 px-16 py-5 text-[35px] font-bold text-black shadow hover:opacity-80">
            <Link to={"/login"}>Start now</Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
