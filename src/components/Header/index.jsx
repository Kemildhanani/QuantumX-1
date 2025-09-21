import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="  w-full sticky top-0 bg-panel  p-[14px] border-b-border z-[999]">
      <div className="flex items-center justify-between  ">
        <img src={Logo} className="h-[40px] " />
        <div className="flex items-center gap-[1.5rem]">
          <Link className=" hover:underline text-[15px] font-semibold">
            About
          </Link>
          <Link className=" hover:underline text-[15px] font-semibold">
            Solutions
          </Link>
          <Link className=" hover:underline text-[15px] font-semibold">
            ShowCase
          </Link>
          <Link className=" hover:underline text-[15px] font-semibold">
            Contact
          </Link>
        </div>
        <div className="gap-3 flex items-center">
          <button className="bg-explore border border-border h-[45px] px-4 rounded-[25px]  cursor-pointer hover:-translate-y-1 transition  ">
            Explore
          </button>
          <button className="bg-grad   h-[45px] px-4 rounded-[25px]  cursor-pointer animate-pulse ">
            Start Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
