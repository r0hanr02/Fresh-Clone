/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { restaurantsMumbai as restaurants, filter } from "../data/Constant";

const MainComponent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="w-full md:w-9/12">
        <p className="text-xl m-2 md:text-2xl font-bold">
          Restaurants with online food delivery in Mumbai
        </p>
      </div>
      <div className="w-10/12 md:w-9/12 flex flex-wrap mt-5">
        <div className="w-20 m-2 shadow-2xl text-sm flex items-center justify-center rounded-2xl border-gray-400 border-2 mx-2 p-1">
          <h6 className="text-md font-semibold mx-1">Filter</h6>
          <img className="w-5" src="./public/filter.png" alt="" />
        </div>
        <div className="w-22 m-2 shadow-2xl flex text-sm items-center justify-center rounded-2xl border-gray-400 border-2 mx-2 p-1">
          <h6 className="text-md font-semibold mx-1">Sort By</h6>
          <img className="w-3 m-1 " src="down-arrow.png" alt="" />
        </div>
        {filter.map((filters, index) => {
          return (
            <div key={index}>
              <div className="w-22 m-2 text-sm shadow-2xl flex items-center justify-center rounded-2xl border-gray-400 border-2 mx-2 p-1">
                <h6 className="text-md font-semibold mx-1">{filters}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-6  flex-wrap w-10/12">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="w-[40%] md:w-64 bg-white rounded-lg shadow-md overflow-hidden m-3 hover:scale-90 duration-300"
          >
            <img
              src={restaurant.img}
              alt={restaurant.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-green-500 text-sm font-semibold">
                {restaurant.offer}
              </p>
              <h3 className="text-lg font-bold mt-2">{restaurant.name}</h3>
              <p className="text-gray-600 text-sm">{restaurant.rating}</p>
              <p className="text-gray-500 text-sm">{restaurant.category}</p>
              <p className="text-gray-500 text-sm">{restaurant.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
