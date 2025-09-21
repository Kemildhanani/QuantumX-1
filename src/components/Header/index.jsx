import React from "react";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header className="  w-full sticky top-0 bg-panel  p-3 border-b-border z-[999]">
      <div className="flex items-center justify-center gap-2">
        <img src={Logo} className="h-[40px] " />
        <div></div>
      </div>
    </header>
  );
};

export default Header;
