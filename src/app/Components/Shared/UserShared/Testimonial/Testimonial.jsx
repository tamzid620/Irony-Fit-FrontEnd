import React from "react";
import coverPhoto from "@/assests/images/SecondCover.jpg";
import arrowPhoto from "@/assests/icons/right-chevron.png";
import apostrophe from "@/assests/icons/double-quotes.png";
import trainerPhoto from "@/assests/images/trainer.jpg";
import Image from "next/image";
import { nunito, rubik } from "@/app/config/fonts";

const reviewData = [
  {
    reviewImage: trainerPhoto,
    reviewerName: "Ryan Carter",
    reviewText:
      "Feels like home! Motivating, clean, and full of positive energy!",
  },
  {
    reviewImage: trainerPhoto,
    reviewerName: "Stephen Martinez",
    reviewText:
    "Best fitness experience ever! I’ve seen real results in just a few weeks!",
  },
  {
    reviewImage: trainerPhoto,
    reviewerName: "Jake Thompson",
    reviewText:
      "Amazing gym! Great trainers, top-notch equipment, and an awesome vibe. Love it!",
  },
];

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
        {/* <<<<<<<<<<<<<<<<<<<<<<< Review section >>>>>>>>>>>>>>>>>>> */}
        <div className=" lg:max-w-7xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-10 ">
          {reviewData.map(
            ({ reviewImage, reviewerName, reviewText }, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 items-center lg:mx-32"
              >
                <div>
                  <Image
                    src={reviewImage}
                    alt="Trainer photo"
                    className="w-[400px] h-[600px] "
                  />
                </div>
                {/* ---------------------------------------- */}
                <div className="relative">
                  <div className=" relative lg:mx-6">
                  <p className={` ${rubik.className} text-[22px] mb-3 `}>{reviewText}</p>
                  <h1 className={` ${nunito.className} font-bold text-xl `}>{reviewerName}</h1>
                  </div>
                  <div>
                  <Image
                    src={apostrophe}
                    alt="apostrophe icon"
                    className="w-36 absolute -top-28 -left-24"
                  />
                   <Image
                    src={apostrophe}
                    alt="apostrophe icon"
                    className="w-36 absolute -bottom-20 right-2"
                  />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
    </div>
  );
};

export default Testimonial;
