/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { restaurants } from "../data/Constant";

const SecSlider = () => {
  const [slide, setSlide] = useState(0);

  const Next = () => {
    console.log(restaurants.length);
    if (restaurants.length - 3 == slide) return false;
    setSlide(slide + 3);
  };
  const previous = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-9/12 flex justify-around md:justify-between my-5">
          <p className="text-2xl m-2 font-bold">
            Top restaurant chains in Mumbai
          </p>
          <div className="flex gap-3">
            <div
              onClick={previous}
              className="bg-slate-200 cursor-pointer selection:bg-transparent rounded-full w-10 h-10 flex items-center justify-center"
            >
              <MdNavigateBefore size={30} />
            </div>
            <div
              onClick={Next}
              className="bg-slate-200 cursor-pointer selection:bg-transparent rounded-full w-10 h-10 flex items-center justify-center"
            >
              <MdNavigateNext size={30} />
            </div>
          </div>
        </div>
        <div className="w-10/12 md:w-8/12 flex overflow-hidden">
          <div className="flex md:space-x-4">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                style={{ transform: `translateX(-${slide * 100}%)` }}
                className="overflow-hidden w-[180px] md:w-[250px] bg-white rounded-lg shadow-md m-3 hover:scale-90 duration-300"
              >
                <img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="w-full h-40 object-cover"
                />
                <div className="linear-gradiant absolute w-full h-40 top-0 flex items-end p-2 font-bold text-white">
                  {restaurant.offer}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mt-2">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm">{restaurant.rating}</p>
                  <p className="text-gray-500 hidden md:block text-sm">
                    {restaurant.category}
                  </p>
                  <p className="text-gray-500 hidden md:block text-sm">
                    {restaurant.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SecSlider;
