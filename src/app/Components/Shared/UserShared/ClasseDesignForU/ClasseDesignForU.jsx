import React from "react";
import { Rubik, Nunito } from "next/font/google";
import "./ClasseDesignForU.css";
import photo1 from "@/assests/images/cdfu1.jpg";
import photo2 from "@/assests/images/cdfu2.jpg";
import photo3 from "@/assests/images/cdfu3.jpg";
import photo4 from "@/assests/images/cdfu4.jpg";
import Image from "next/image";

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
    title1: "Outdoor Classes",
  },
  {
    id: 2,
    img: photo2,
    title: "Personal Training",
  },
  {
    id: 3,
    img: photo3,
    title: "Group Training",
  },
  {
    id: 4,
    img: photo4,
    title: "Digital coaching",
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
      <div className="flex justify-center ">
        <div className="mt-10 text-start grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-8">
          {imageData.map((data) => (
            <div key={data.id} className="h-[400px]">
              <div className="card-zoom">
                <figure className="zoom-effect">
                  <Image
                    className="card-image bg-gray-200 "
                    width={380}
                    height={240}
                    src={data.img}
                    alt={data.title}
                  />
                </figure>
              </div>
              <h1 className="text-lg mt-3">{data.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClasseDesignForU;
