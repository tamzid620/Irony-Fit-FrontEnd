import React from 'react';
import { Rubik , Nunito } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const nunito = Nunito({
 weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});


const ClasseDesignForU = () => {
    return (
        <div className='mt-32'>
            <h1 className={` ${rubik.className} text-white uppercase font-bold text-center  mb-20`}>
                <span className='text-3xl'>Classes Design</span> <br />
                <span className='text-7xl'> For You</span>
            </h1>
            <div>
                
            </div>
        </div>
    );
};

export default ClasseDesignForU;