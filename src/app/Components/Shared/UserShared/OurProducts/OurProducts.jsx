"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import { nunito, rubik } from "@/app/config/fonts";
import { baseUrl } from "@/app/config/config";
import SharedLoading from "@/app/config/SharedLoading";

const OurProducts = () => {
  const [allEquipments, setAllEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(baseUrl("all-equipments"))
      .then((res) => {
        setAllEquipments(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  // handleAddToCart button ---------------------
  const handleAddToCart = (equipment) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(equipment);
    localStorage.setItem("cart", JSON.stringify(cart));
    //  swal message -----------------------------
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item has been added to your cart!",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload();
  };

  return (
    <div>
      <div
        className={` ${rubik.className} lg:max-w-7xl md:max-w-3xl max-w-sm lg:mx-auto md:mx-16 mx-3 text-white my-40 `}
      >
        <h1
          className={`${nunito.className} text-center text-4xl uppercase font-bold text-[#D6FB00] mb-8 `}
        >
          Our Products
        </h1>
        {/* <SharedLoading /> */}
        {isLoading ? (
          <SharedLoading />
        ) : (
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10 ">
            {allEquipments.map((equipment) => (
              <div
              key={equipment?.id}
              className="relative bg-white w-[200px] rounded-sm transform hover:translate-y-2 hover:shadow-xl transition duration-300"
              >
              
                <Link href={`/OurProductDetails/${equipment?.id}`}>
                  <div className="">
                    <Image
                      src={equipment?.images[0]}
                      alt={equipment?.title}
                      width={200}
                      height={200}
                      className="w-full p-2"
                    />
                  </div>
                  <div className="bg-gray-800 m-1 rounded-sm px-2 pt-2 pb-12 relative">
                    <h1 className="py-3 underline hover:text-green-300">
                      {equipment?.title}
                    </h1>
                    <p>$ {equipment?.price}</p>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(equipment)}
                  className="absolute bottom-0 w-[185px] bg-gray-500 hover:bg-gray-700 uppercase py-2 m-2"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
