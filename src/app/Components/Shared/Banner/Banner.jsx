"use client";
import React from "react";
import "./Bannert.css";
import Image from "next/image";
import bannerImage from "@/assests/images/ironyFit Home Banner.jpg";
import downArrrow from "@/assests/icons/downward-arrow.png";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text1] = useTypewriter({
    words: ["Hard", "Pays Off"],
    loop: 0,
  });
  const [text2] = useTypewriter({
    words: ["Good", "Proud"],
    loop: 0,
  });

  return (
    <div>
      {/* Banner Image section  */}
      <div>
        <Image
          src={bannerImage}
          alt="Banner Image"
          className="w-full lg:h-[700px] md:h-full sm: h-full"
        />
      </div>
      {/* polygen div >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className="absolute top-[45%] left-[40%] z-10">
        {/* Polygon 1 */}
        <div className="Bannerpolygen  flex items-center justify-center">
          <p className="w-[450px] h-[75px] text-center -rotate-[10deg] text-3xl font-extrabold uppercase text-black">
            <span>Work</span> <br />
            <span>{text1}</span>
          </p>
        </div>
        <div className="Transpolygen" />

        {/* Polygon 2 */}
        <div className="Bannerpolygen flex items-center justify-center mt-24">
          <p className=" w-[450px] h-[75px] text-center -rotate-[10deg] text-3xl font-extrabold uppercase text-black">
            <span>Feel</span> <br />
            <span>{text2}</span>
          </p>
        </div>
        <div className="Transpolygen" />

        {/* Polygon 3 */}
        <div className="Bannerpolygen flex items-center justify-center mt-48">
          <p className="flex justify-center items-center -rotate-[5deg] text-3xl font-extrabold uppercase text-black">
            <Image
            src={downArrrow}
            alt="down arrow icon"
            className="w-[50px]"
            />
          </p>
        </div>

      </div>
    </div>
  );
};

export default Banner;
