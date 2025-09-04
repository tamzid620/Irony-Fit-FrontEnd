import React from "react";
import footerimg from "@/assests/icons/navImage.jpg";
import socialMedia1 from "@/assests/icons/facebook.png";
import socialMedia2 from "@/assests/icons/twitter.png";
import socialMedia3 from "@/assests/icons/linkedin.png";
import { rubik } from "@/app/config/fonts";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className={` ${rubik.className} bg-transparent uppercase pt-10 text-sm text-center font-bold  flex justify-center text-white  `}
    >
      <div className="">
        <div className="mb-10">
          <div className="flex justify-center my-8">
            <Image
              className="w-[150px] drop-shadow-lg"
              src={footerimg}
              alt=""
            />
          </div>
          <p className="font-bold my-4">
            Irony Fit Club <br />
            providing an exceptional experience since 2025
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="flex justify-center items-center gap-5 py-4 mb-10">
          <Image
            className="w-[35px] drop-shadow-lg"
            src={socialMedia1}
            alt=""
          />
          <Image
            className="w-[35px] drop-shadow-lg"
            src={socialMedia2}
            alt=""
          />
          <Image
            className="w-[35px] drop-shadow-lg"
            src={socialMedia3}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
