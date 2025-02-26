import React from "react";
import { Rubik, Nunito } from "next/font/google";
import coverPhoto from "@/assests/images/SecondCover.jpg";
import arrowPhoto from "@/assests/icons/right-chevron.png";
import apostrophe from "@/assests/icons/double-quotes.png";
import trainerPhoto from "@/assests/images/trainer.jpg";
import Image from "next/image";

const rubik = Rubik({
  weight: ["300", "400", "700", "900"],
  //   subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["300", "400", "700", "900"],
  //   subsets: ["latin"],
});

const Testimonial = () => {
  return (
    <div className="bg-white">
      {/* cover photo section ------------------------ */}
      <Image
        src={coverPhoto}
        alt="cover photo"
        className="w-full h-[700px] object-cover"
      />
      {/* title section ------------------------------ */}
      <div className="flex justify-center">
        <div className="relative lg:max-w-7xl md:max-w-3xl sm: max-w-sm lg:mx-0 md:mx-8 sm: mx-10">
          <div className="group">
          <div
            className={` ${rubik.className} relative w-[1000px] py-32 text-center text-gray-800 uppercase font-bold`}
          >
            <h1 className="text-3xl">Together We</h1>
            <h1 className="text-7xl -mt-2">Succeed</h1>
          </div>
          {/* arrow icon  */}
          <div className="absolute -top-[270px] -right-[180px] transition-transform duration-500 group-hover:translate-x-10">
            <Image
              src={arrowPhoto}
              alt="cover photo"
              className="w-full object-cover -rotate-45"
            />
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
