"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import coverPhoto from "@/assests/images/SecondCover.jpg";
import arrowPhoto from "@/assests/icons/nu-arrow.png";
import apostrophe1 from "@/assests/icons/double-quotes (1).png";
import apostrophe2 from "@/assests/icons/double-quotes (2).png";
import trainerPhoto1 from "@/assests/images/cdfu1.jpg";
import trainerPhoto2 from "@/assests/images/cdfu4.jpg";
import trainerPhoto3 from "@/assests/images/IIF2.jpg";
import { nunito, rubik } from "@/app/config/fonts";

const reviewData = [
  {
    reviewImage: trainerPhoto1,
    reviewerName: "Ryan Carter",
    reviewText:
      "Feels like home! Motivating, clean, and full of positive energy!",
  },
  {
    reviewImage: trainerPhoto2,
    reviewerName: "Stephen Martinez",
    reviewText:
      "Best fitness experience ever! I’ve seen real results in just a few weeks!",
  },
  {
    reviewImage: trainerPhoto3,
    reviewerName: "Jake Thompson",
    reviewText:
      "Amazing gym! Great trainers, top-notch equipment, and an awesome vibe. Love it!",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black pb-20">
      {/* Cover Photo Section */}
      <Image
        src={coverPhoto}
        alt="cover photo"
        className="w-full h-[700px] object-cover"
      />

      {/* Title Section */}
      <div className="flex justify-center">
        <div className="relative lg:max-w-7xl md:max-w-3xl sm:max-w-sm lg:mx-0 md:mx-8 sm:mx-10">
          <div className="group">
            <div
              className={` ${rubik.className} relative lg:w-[1000px] md:w-full py-32 text-center text-gray-800 uppercase font-bold`}
            >
              <h1 className="text-3xl">Together We</h1>
              <h1 className="text-7xl -mt-2">Succeed</h1>
            </div>
            {/* Arrow Icon */}
            <div className="absolute -top-[200px] lg:-right-[180px] md:-right-[100px] hidden lg:block transition-transform duration-500 group-hover:translate-x-10">
              <Image
                src={arrowPhoto}
                alt="cover photo"
                className="w-96 object-cover -rotate-[44deg]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------- Review Section ---------------------------*/}
      <div className="lg:max-w-7xl md:max-w-3xl sm:max-w-sm lg:mx-auto md:mx-8 sm: mx-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center lg:mx-32 md:gap-16"
          >
            <div>
              <Image
                src={reviewData[currentIndex].reviewImage}
                alt="Trainer photo"
                className="w-[400px] h-[400px] object-cover"
              />
            </div>

            {/* Review Content */}
            <div className="relative">
              <div className="relative lg:mx-6 md:mt-0 mt-10">
                <p className={` ${rubik.className} text-[22px] mb-3 `}>
                  {reviewData[currentIndex].reviewText}
                </p>
                <h1 className={` ${nunito.className} font-bold text-xl `}>
                  {reviewData[currentIndex].reviewerName}
                </h1>
              </div>

              {/* Apostrophe Icons */}
              <div>
                <Image
                  src={apostrophe2}
                  alt="apostrophe icon"
                  className="lg:w-36 md:w-28 w-20 absolute md:-top-28 -top-2 md:-left-20 -left-14"
                />
                <Image
                  src={apostrophe1}
                  alt="apostrophe icon"
                  className="lg:w-36 md:w-28 w-20 absolute md:-bottom-20 -bottom-10  right-2"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonial;
