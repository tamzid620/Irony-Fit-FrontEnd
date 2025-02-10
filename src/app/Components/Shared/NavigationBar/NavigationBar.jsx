import React from "react";
import "./NavigationBar.css";
import Link from "next/link";
import Image from "next/image";
import navImage from "@/assests/icons/NavImage.png";
import menuImage from "@/assests/icons/menubar.png";
import arrowImage from "@/assests/icons/right-chevron.png";
import { Nunito } from "next/font/google";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const nunito = Nunito({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const NavigationBar = () => {
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

  return (
    <nav className={`${nunito.className} bg-white text-black`}>
      {/* navlist for large and medium device */}
      <div className="lg:flex md:flex sm: hidden justify-between items-center  mx-6 ">
        {/* image section  */}
        <div>
          <Image src={navImage} alt="navbar image" className="w-[90px]" />
        </div>
        {/* ul section  */}
        <ul className="flex gap-8 ">
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
        <button className="uppercase font-extrabold text-sm flex items-center">
          <Image src={arrowImage} alt="navbar image" className="w-[30px]" />
          <h1 className="relative group">
            <span className="relative">Join</span>
            <hr className="navHrPolygen absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </h1>
        </button>
      </div>
      {/* navlist for small device */}
      <div className="md:hidden sm: block">
        <div className="flex justify-between items-center mx-6 py-2">
          {/* image section  */}
          <div>
            <Image src={navImage} alt="navbar image" className="w-[50px]" />
          </div>
          {/* menubar section  */}
          <div>
            <Image src={menuImage} alt="navbar image" className="w-[30px] drop-shadow-lg" />
          </div>
        </div>
         {/* join button  */}
         <div className="flex justify-center bg-[#1AAD49] group">
         <button className="uppercase font-extrabold text-sm flex items-center py-4 text-white group-hover:text-black"> 
         <TbArrowBadgeRightFilled size={25}  />
          <h1 className="relative group">
            <span className="relative text-lg">Join</span>
          </h1>
        </button>
         </div>
         {/* ul section  */}
        <ul className="block text-center ">
          {navlist.map(({ path, name }, index) => (
            <Link key={index} href={path} className="relative group">
              <li className=" uppercase font-extrabold text-sm relative leading-[50px]">
                {name}
              </li>
              <hr className="navHrPolygen absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
