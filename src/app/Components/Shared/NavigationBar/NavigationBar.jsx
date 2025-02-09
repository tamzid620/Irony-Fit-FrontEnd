import Image from "next/image";
import React from "react";
import navImage from "@/assests/icons/NavImage.png";
import Link from "next/link";
import { Merriweather, Nunito } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-Merriweather",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ['400 '],
  variable: "--font-nunito",
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
    <nav className={`${nunito.variable} ${merriweather.variable} font-sans `}>
      <div className="mx-6 bg-gray-300 flex justify-between items-center">
        {/* image section  */}
        <div>
          <Image src={navImage} alt="navbar image" className="w-[70px]" />
        </div>
        {/* ul section  */}
        <ul className="flex gap-6">
          {navlist.map(({ path, name }, index) => (
            <Link key={index} href={path}>
              <li className="uppercase font-bold">{name}</li>
            </Link>
          ))}
        </ul>
        {/* join button  */}
        <button>Join</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
