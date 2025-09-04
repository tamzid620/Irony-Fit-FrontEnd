"use client";
import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Link from "next/link";
import Image from "next/image";
import navImage from "@/assests/icons/navImage.jpg";
import menuImage from "@/assests/icons/white-menu.png";
import arrowImage from "@/assests/icons/nu-arrow.png";
import { Nunito } from "next/font/google";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { BsFillCartCheckFill } from "react-icons/bs";
import Swal from "sweetalert2";
import ViewCart from "../../Shared/UserShared/ViewCart/ViewCart";

const nunito = Nunito({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

const navlist = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Classes",
  },
  {
    path: "/",
    name: "Membership",
  },
  {
    path: "/",
    name: "About",
  },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const cart = JSON.parse(cartData);
      setCartLength(cart.length);
    }
  }, []);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleInProgress = () => {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "in progress!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const toggleViewCart = () => {
    setViewCart(!viewCart);
  };


  return (
    <nav className="relative">
      <div className=" bg-gray-900 text-[#D6FB00] py-1 z-50 relative">
        <div>
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
                  <li
                    // onClick={handleInProgress}
                    className=" uppercase font-extrabold text-sm relative"
                  >
                    {name}
                  </li>
                  <hr className="navHrPolygen absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              ))}
            </ul>
            {/* join button  */}
            <button className="uppercase text-white font-extrabold text-sm flex items-center">
              <Image src={arrowImage} alt="navbar image" className="w-[30px]" />
              <h1 onClick={handleInProgress} className="relative group">
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
                <h1 onClick={handleInProgress} className="relative group">
                  <span className="relative text-lg">Join</span>
                </h1>
              </button>
            </div>
            {/* ul section  */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out shadow-sm shadow-[#D6FB00]  ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <ul className={`${nunito.className} block text-center relative z-50`}>
                {navlist.map(({ path, name }, index) => (
                  <Link key={index} href={path} className="relative group block">
                    <li
                      // onClick={handleInProgress}
                      className="uppercase font-extrabold text-sm relative leading-[50px] hover:bg-[#D6FB00] hover:text-black"
                    >
                      {name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ViewCart  SideBar */}
        <div className="relative md:-top-[85px] -top-[120px] left-0">
          {viewCart ? (
            <div className=" fixed bg-zinc-950 w-[380px] shadow-md h-screen right-0 z-50 transition ease-in-out duration-500 ">
              <ViewCart toggleViewCart={toggleViewCart} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* Cart Section  */}
      <div
        className="fixed bottom-10 right-5 z-40 font-bold bg-[#D6FB00] p-4 rounded-sm shadow-black shadow-md"
        title="View Cart"
        onClick={toggleViewCart}
      >
        <div className="relative">
          <BsFillCartCheckFill className="relative" size={25} color="black" />
          <p className="absolute top-[-6px] right-[-10px] bg-black text-white rounded-full flex justify-center text-center w-[15px] text-[10px]">
            {cartLength}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
