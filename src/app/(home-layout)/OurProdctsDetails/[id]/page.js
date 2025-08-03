import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SharedLoading from '@/app/config/SharedLoading';
import Image from 'next/image';

const ProductDetails = () => {

    const router = useRouter();
    const { id } = router.query;
    const [isLoading, setIsLoading] = useState(false);
    const [equipment, setEquipments] = useState(null);

      useEffect(() => {
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
        style={{ fontFamily: fonts.nunito }}
        className="lg:max-w-7xl md:max-w-3xl max-w-sm lg:mx-auto md:mx-16 mx-3 text-white "
      >
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
                    src={equipment?.image}
                    alt={equipment?.title}
                    className=""
                  />
                </div>
                <div className="col-span-12 md:col-span-7 mt-10 leading-11">
                  <h1 style={{ fontFamily: fonts.rubik }}>
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

export default ProductDetails;