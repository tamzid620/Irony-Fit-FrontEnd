import React from "react";
import Image from "next/image";
import rightArrow from "@/assests/icons/right-chevron.png";
import if1 from "@/assests/images/IIF1.jpg";
import if2 from "@/assests/images/IIF3.jpg";
import if3 from "@/assests/images/IIF2.jpg";
import { Rubik, Nunito } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

const nunito = Nunito({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

const IntroductionIF = () => {
  return (
    <div className="bg-white lg:mt-[150px] md:mt-[70px] sm: mt-[70px] pb-20">
      <div className="flex justify-center">
        <div className=" lg:max-w-7xl md:max-w-3xl sm: max-w-sm  md:mx-0 sm: mx-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 ">
            {/* grid div -1  */}
            {/* title section  */}
            <div className="lg:mt-20 group">
              <div className=" relative ">
                <Image
                  src={rightArrow}
                  alt="arrow logo"
                  className="relative transition-transform duration-500 group-hover:translate-x-10"
                />
                  <div
                    className={` ${rubik.className} absolute bottom-24 left-20 text-gray-800 uppercase font-bold`}
                  >
                    <h1 className="text-3xl">Introduction</h1>
                    <h1 className="text-6xl -mt-2">Irony Fit</h1>
                  </div>
              </div>
            </div>

            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<< information section >>>>>>>>>>>>>>>>>>>> */}
            {/* grid div 2  */}
            {/* card -1  */}
            <div className="w-[350px] lg:mt-[450px] md:mt-[50px]">
              <div>
                <Image
                  src={if1}
                  alt="story picture"
                  className="w-full h-[450px] object-cover"
                />
                <h1 className={` ${rubik.className} font-bold text-3xl my-2 `}>
                  Mission
                </h1>
                <p className={`${nunito.className}  text-lg `}>
                  Our purpose is to pass on empowering knowledge and training
                  guidance in order to have a positive impact on the health and
                  fitness of everyone we work with. <br /> <br />
                  To provide a personalised health and fitness service that
                  unlocks every individual’s true potential so they can achieve
                  their desired goals.
                </p>
              </div>
            </div>
            {/* grid div 3  */}
            <div className="grid lg:grid-cols-1 md:grid-cols-2 lg:gap-0 md:gap-96">
              {/* card -2  */}
              <div className="w-[350px]  lg:mt-[100px] md:mt-7 sm: mt-7 mb-10">
                <Image
                  src={if2}
                  alt="story picture"
                  className="w-full h-[450px] object-cover"
                />
                <h1 className={` ${rubik.className} font-bold text-3xl my-2 `}>
                  Story
                </h1>
                <p className={`${nunito.className}  text-lg `}>
                  Our main focus at F7 Fitness is functional training because of
                  the proven benefits. With an emphasis on mobility, strength,
                  and conditioning, the benefits of functional training differ
                  from other workouts because of the way it targets your body.
                </p>
              </div>
              {/* card -3  */}
              <div className="w-[350px] lg:mt-0 md:mt-7">
                <Image
                  src={if3}
                  alt="story picture"
                  className="w-full h-[450px] object-cover"
                />
                <h1 className={` ${rubik.className} font-bold text-3xl my-2 `}>
                  Approach
                </h1>
                <p className={`${nunito.className}  text-lg `}>
                  We are a hybrid gym and training facility. We have clean,
                  state of the art facilities with the most knowledgeable staff
                  and cutting-edge training methods. We offer open gym, team
                  training, group classes, boxing, cycle and personal training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionIF;
