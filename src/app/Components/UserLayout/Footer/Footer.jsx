import React from "react";
import { Rubik, Nunito } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "700", "900"],
  
});

const nunito = Nunito({
  weight: ["300", "400", "700", "900"],
  
});

const Footer = () => {


  return (
    <footer
      className={` ${rubik.className} bg-[#D6FB00] uppercase py-10 text-center text-4xl font-bold `}
    >
      <h1>Footer</h1>
      
    </footer>
  );
};

export default Footer;
