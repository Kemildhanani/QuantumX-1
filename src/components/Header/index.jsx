import React from "react";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header className="  w-full sticky top-0 bg-panel  p-3 border-b-border ">
      <div className="flex items-center justify-center gap-2">
        <img src={Logo} className="size-[40px]" />
        <div>
          <span className="text-cyan-500">QUANTUM</span>
          <span className="text-[#8A2BE2]">X</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
