import React from "react";
import { Rubik, Nunito } from "next/font/google";
import coverPhoto from "@/assests/images/SecondCover.jpg";
import arrowphoto from "@/assests/icons/right-chevron.png";
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
        <div className=" lg:max-w-7xl md:max-w-3xl sm: max-w-sm mx-0">
          <div
            className={` ${rubik.className} bg-red-500 py-20 text-center text-gray-800 uppercase font-bold`}
          >
            <h1 className="text-3xl">Together We</h1>
            <h1 className="text-6xl -mt-2">Succeed</h1>
          </div>
          <div>
          <Image
        src={arrowphoto}
        alt="cover photo"
        className="w-full object-cover -rotate-45"
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
