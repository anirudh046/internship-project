import React from "react";

import Logo from "./Logo";

const Header = () => {
  return (
    <footer>
      <div
        style={{ backgroundColor: "#FF671F" }}
        className="flex flex-wrap items-center justify-center p-2 sm:p-2 md:p-3 lg:p-5  w-full"
      ></div>
      <div className="flex flex-wrap items-center justify-center   w-full">
        <Logo />
      </div>
      <div
        style={{ backgroundColor: "#046A38" }}
        className="flex flex-wrap items-center justify-center p-2 sm:p-2 md:p-3 lg:p-5 w-full"
      ></div>
    </footer>
  );
};

export default Header;
