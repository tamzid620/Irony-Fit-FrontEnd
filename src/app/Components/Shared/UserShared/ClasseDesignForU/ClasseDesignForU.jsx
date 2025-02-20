import React from "react";
import { Rubik, Nunito } from "next/font/google";
import "./ClasseDesignForU.css";
import Image from "next/image";
import photo1 from "@/assests/images/cdfu1.jpg";
import photo2 from "@/assests/images/cdfu2.jpg";
import photo3 from "@/assests/images/cdfu3.jpg";
import photo4 from "@/assests/images/cdfu4.jpg";
import rightArrow from "@/assests/icons/right-chevron.png";

const rubik = Rubik({
  weight: ["300", "400", "700", "900"],
  //   subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["300", "400", "700", "900"],
  //   subsets: ["latin"],
});

const imageData = [
  {
    id: 1,
    img: photo1,
    title1: "Outdoor",
    title2: "Classes",
  },
  {
    id: 2,
    img: photo2,
    title1: "Personal ",
    title2: "Training",
  },
  {
    id: 3,
    img: photo3,
    title1: "Group ",
    title2: " Training",
  },
  {
    id: 4,
    img: photo4,
    title1: "Digital ",
    title2: " Coaching",
  },
];

const ClasseDesignForU = () => {
  return (
    <div className="mt-32">
      <h1
        className={` ${rubik.className} text-white uppercase font-bold text-center  mb-20`}
      >
        <span className="text-3xl">Classes Design</span> <br />
        <span className="text-7xl"> For You</span>
      </h1>
      {/* ------------------- information div ------------------- */}
      <div className={` ${nunito.className} flex justify-center `}>
        <div className="mt-10 text-start grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-8">
          {imageData.map((data) => (
            <div key={data.id} className="h-[400px] lg:mb-0 md:mb-14 sm: mb-14 group">
              <div className="card-zoom">
                <figure className="zoom-effect">
                  <Image
                    className="card-image bg-gray-200 "
                    width={380}
                    height={240}
                    src={data.img}
                    alt="image title"
                  />
                </figure>
              </div>
              {/* title section >>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              <div className="flex justify-between items-center mx-2">
                <div className="text-white group-hover:text-[#D6FB00] text-2xl uppercase font-extrabold ">
                  <h1 className=" mt-3">{data.title1}</h1>
                  <h1>{data.title2}</h1>
                </div>
                <div>
                  <Image
                    className="w-[50px]"
                    src={rightArrow}
                    alt="right arrow icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClasseDesignForU;
