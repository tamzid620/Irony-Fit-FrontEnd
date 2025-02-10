import Image from "next/image";
import React from "react";
import navImage from "@/assests/icons/NavImage.png";
import arrowImage from "@/assests/icons/right-chevron.png";
import Link from "next/link";
import { Nunito } from "next/font/google";
import "./NavigationBar.css";

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
    <nav className={`${nunito.className} `}>
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
       <div className="md:hidden sm: block  mx-6 ">

       </div>
    </nav>
  );
};

export default NavigationBar;
