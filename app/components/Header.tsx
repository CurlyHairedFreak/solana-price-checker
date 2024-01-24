import Image from "next/image";
import React from "react";
import solanaImg from "../../public/solana-logo.png";

const Header = () => {
  return (
    <header className="flex items-center border-b-2 border-solid  border-fuchsia-500 ">
      <Image src={solanaImg} alt="Solana Logo" className="w-20 ml-8" />
      <h2 className="text-cyan-300 text-2xl font-semibold tracking-wide">
        Price Tracker
      </h2>
    </header>
  );
};

export default Header;
