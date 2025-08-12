"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import SharedLoading from '@/app/config/SharedLoading';
import { nunito, rubik } from '@/app/config/fonts';
import { baseUrl } from '@/app/config/config';
import axios from 'axios';

const OurProductDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [equipment, setEquipments] = useState(null);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    axios
      .get(baseUrl(`all-equipments/${id}`))
      .then((res) => {
        setEquipments(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div
      className={`${rubik.className} lg:max-w-7xl md:max-w-3xl max-w-sm lg:mx-auto md:mx-16 mx-3 text-white `}
    >
      <h1>equipment: {equipment?.length}</h1>
      {equipment && (
        <div key={equipment?.id}>
          <h1 className="text-center text-[#D6FB00] text-4xl uppercase font-bold mb-8 my-20">
            {equipment?.title}
          </h1>
          {isLoading ? (
            <SharedLoading />
          ) : equipment ? (
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 md:col-span-5">
                <Image
                  src={equipment?.images[0]}
                  alt={equipment?.title}
                  priority
                  width={500}
                  height={300}
                  className=""
                />
              </div>
              <div className="col-span-12 md:col-span-7 mt-10 leading-11">
                <h1 className={`${nunito.className} `}>
                  <span className="text-[#D6FB00] text-xl font-bold uppercase me-2">
                    Name:
                  </span>
                  <span className=" text-xl">{equipment?.title}</span>
                </h1>
                <p>
                  <span className="text-[#D6FB00] text-xl font-bold uppercase me-2">
                    Price:
                  </span>
                  <span className=" text-xl">{equipment?.price}</span>
                </p>
                <p>
                  <span className="text-[#D6FB00] text-xl font-bold uppercase me-2">
                    Description:
                  </span>
                  <span className=" text-xl">{equipment?.description}</span>
                </p>
                <p>
                  <span className="text-[#D6FB00] text-xl font-bold uppercase me-2">
                    Rating:
                  </span>
                  <span className=" text-xl">{equipment?.rating}</span>
                </p>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default OurProductDetails;