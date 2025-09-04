import React, { useEffect, useState } from "react";
import Image from "next/image";
import closeIcon from "@/assests/icons/closeBlack.png";
import deleteIcon from "@/assests/icons/disposal.png";
import Link from "next/link";
import { nunito, rubik } from "@/app/config/fonts";

const ViewCart = ({ toggleViewCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
  }, []);

  // Total Price --------
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  // handleDelete button  -----------------------
  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className={`${nunito.className} relative flex flex-col h-full text-white `}>
      <div className="flex items-center justify-between bg-[#D6FB00] text-black font-bold py-3 px-4">
        <h1 className="uppercase">Your Cart</h1>
        <Image
          onClick={toggleViewCart}
          className="w-[25px] my-2 mx-2 hover:bg-white p-1"
          src={closeIcon}
          alt="navbar"
        />
      </div>
      {/* information section  */}
      <div className={`${rubik.className} `}>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty!</p>
        ) : (
          cartItems.map(({ id, mealName, price, mealPhoto }) => (
            <div
              key={id}
              className=" flex justify-between mx-3 my-3 bg-gray-800 shadow-md hover:shadow-lg rounded-md "
            >
              {/* Item Image */}
              <div>
                <Image
                  src={mealPhoto}
                  width={100}
                  height={100}
                  className="w-full h-[70px] bg-sky-500"
                  alt={`${mealName} Image`}
                />
              </div>
              {/* Item Details */}
              <div className="flex justify-between items-center w-full px-2 py-3">
                <div>
                  <h1 className="flex items-center gap-1">
                    <p> </p> <span>{mealName}</span>
                  </h1>
                  <h2 className="flex items-center gap-1">
                    <p>Price: </p> <span>${price.toFixed(2)}</span>
                  </h2>
                </div>
                {/* Delete Button */}
                <div>
                  <Image
                    onClick={() => handleDelete(id)}
                    className="w-[25px] mx-2 hover:drop-shadow-lg cursor-pointer"
                    src={deleteIcon}
                    alt="Delete Icon"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/*   order section  */}
      <div >
        <div className="absolute bottom-0 w-full p-4 ">
        <p className={`${rubik.className} my-2  `}>
          Total: ${calculateTotal().toFixed(2)}
        </p>
        <div>
          <Link href="/paymentGateway">
            <button className="w-full bg-[#D6FB00] hover:bg-[#7f9503] px-4 py-2 rounded-sm text-black hover:text-white font-bold uppercase">
              Order Now
            </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
