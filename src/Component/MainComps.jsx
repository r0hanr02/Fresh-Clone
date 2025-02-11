/* eslint-disable no-unused-vars */
import React from "react";
import { cities, every_restaurents, terms } from "../data/Constant";

const MainComps = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-9/12 flex justify-between">
        <p className="text-2xl m-2 font-bold">
          Best Places to Eat Across Cities
        </p>
      </div>
      <div className="w-full md:w-9/12 flex flex-wrap m-5 ">
        {cities.map((term, index) => {
          return (
            <div key={index}>
              <div className="shadow-lg rounded-2xl border-gray-200 border-2 m-3 p-4 cursor-pointer duration-300 hover:scale-90">
                <h6 className="text-md font-semibold mx-1">{term}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-9/12 flex justify-between">
        <p className="text-2xl m-2 font-bold">Best Cuisines Near Me</p>
      </div>
      <div className="w-full md:w-9/12 flex flex-wrap m-5 ">
        {terms.map((term, index) => {
          return (
            <div key={index}>
              <div className="shadow-lg rounded-2xl border-gray-200 border-2 m-3 p-4 cursor-pointer duration-300 hover:scale-90">
                <h6 className="text-md font-semibold mx-1">{term}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-9/12 flex justify-between">
        <p className="text-2xl m-2 font-bold">
          Explore Every Restaurants Near Me
        </p>
      </div>
      <div className="w-full md:w-9/12 flex flex-wrap m-5">
        {every_restaurents.map((term, index) => {
          return (
            <div key={index}>
              <div className="shadow-lg rounded-2xl border-gray-200 border-2 m-3 p-4 cursor-pointer duration-300 hover:scale-90">
                <h6 className="text-md font-semibold mx-1">{term}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainComps;
