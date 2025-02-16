"use client";
import React, { useState } from "react";
import "./NavigationBar.css";
import Link from "next/link";
import Image from "next/image";
import navImage from "@/assests/icons/navImage.jpg";
import menuImage from "@/assests/icons/white-menu.png";
import arrowImage from "@/assests/icons/right-chevron.png";
import { Nunito } from "next/font/google";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const nunito = Nunito({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const navlist = [
  {
    path: "",
    name: "Home",
  },
  {
    path: "",
    name: "Classes",
  },
  {
    path: "",
    name: "Membership",
  },
  {
    path: "",
    name: "About",
  },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gray-900 text-[#D6FB00] py-1 z-50 relative">
      {/* navlist for large and medium device >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className="lg:flex md:flex sm: hidden justify-between items-center  px-6 shadow-sm shadow-[#D6FB00] relative z-50">
        {/* image section  */}
        <div>
          <Image src={navImage} alt="navbar image" className="w-[90px]" />
        </div>
        {/* ul section  */}
        <ul className={`${nunito.className} flex gap-8  `}>
          {navlist.map(({ path, name }, index) => (
            <Link key={index} href={path} className="relative group">
              <li className=" uppercase font-extrabold text-sm relative">
                {name}
              </li>
              <hr className="navHrPolygen absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          ))}
        </ul>
        {/* join button  */}
        <button className="uppercase text-white font-extrabold text-sm flex items-center">
          <Image src={arrowImage} alt="navbar image" className="w-[30px]" />
          <h1 className="relative group">
            <span className="relative">Join</span>
            <hr className="navHrPolygen absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </h1>
        </button>
      </div>
      {/* navlist for small device >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      <div className="md:hidden sm: block ">
        <div className="flex justify-between items-center mx-6 py-2">
          {/* image section  */}
          <div>
            <Image src={navImage} alt="navbar image" className="w-[50px]" />
          </div>
          {/* menubar section  */}
          <div>
            <Image
              onClick={handleMenu}
              src={menuImage}
              alt="navbar image"
              className="w-[30px] drop-shadow-lg"
            />
          </div>
        </div>
        {/* join button  */}
        <div className="flex justify-center bg-[#D6FB00] group hover:bg-black">
          <button className="uppercase font-extrabold text-sm flex items-center py-4 text-black group-hover:text-white">
            <TbArrowBadgeRightFilled size={25} />
            <h1 className="relative group">
              <span className="relative text-lg">Join</span>
            </h1>
          </button>
        </div>
        {/* ul section  */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out shadow-sm shadow-[#D6FB00]  ${
            isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className={`${nunito.className} block text-center relative z-50`}>
            {navlist.map(({ path, name }, index) => (
              <Link key={index} href={path} className="relative group block">
                <li className="uppercase font-extrabold text-sm relative leading-[50px] hover:bg-[#D6FB00] hover:text-black">
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
