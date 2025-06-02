import React from "react";

export default function Header() {
  return (
    <div>
      <div className="w-full bg-[#191919] flex justify-between p-5 ">
        <div className=" flex h-100% items-center gap-10 ">
          <button className=" cursor-pointer lg:hidden">
            <img src="./assets/menu.svg" alt="" />
          </button>

          <button className="cursor-pointer hidden md:block lg:block">
            <img src="./assets/audiophile.svg" alt="" />
          </button>
        </div>
        <button className="cursor-pointer  lg:hidden md:hidden sm:block">
          <img src="./assets/audiophile.svg" alt="" />
        </button>
        <nav className="lg:flex text-[#FFFFFF] gap-8 hidden ">
          <h1 className="cursor-pointer hover:text-[#D87D4A]">Home</h1>
          <h1 className="cursor-pointer hover:text-[#D87D4A]">HEADPHONES</h1>
          <h1 className="cursor-pointer hover:text-[#D87D4A]">SPEAKERS</h1>
          <h1 className="cursor-pointer hover:text-[#D87D4A]">EARPHONES</h1>
        </nav>

        <button className="cursor-pointer">
          <img src="./assets/cart.png" alt="" />
        </button>
      </div>
      <div className="w-full h-[1px] bg-[#FFFFFF]"></div>
    </div>
  );
}
