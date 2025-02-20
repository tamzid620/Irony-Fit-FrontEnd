import React from "react";
import { Rubik, Nunito } from "next/font/google";
import Image from "next/image";
import rightArrow from '@/assests/icons/right-chevron.png' ;

const rubik = Rubik({
  weight: ["300", "400", "700", "900"],
  //   subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["300", "400", "700", "900"],
  //   subsets: ["latin"],
});

const IntroductionIF = () => {
  return (
    <div className="bg-white mt-[150px]">
      <div className="flex justify-center">
        <div className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-0">
            <div className="flex justify-between">
            {/* title section  */}
          <div className=" relative mt-20 bg-red-100">
            <Image 
            src={rightArrow}
             alt="arrow logo" 
             className="relative"
             />
             <div className={` ${rubik.className} absolute bottom-36 left-32 text-black uppercase font-bold`}>
            <h1 className="text-3xl">Introduction</h1>
            <h1 className="text-6xl -mt-2">Irony Fit</h1>
             </div>
          </div>

{/* information section  */}
<div className="bg-green-100">

</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionIF;
