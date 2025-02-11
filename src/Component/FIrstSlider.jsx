/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const FirstSlider = () => {

  const [slide, setSlide] = useState(0);
  
  const images = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png",
  ];
  const Next = () => {
    console.log(images.length)
    if (images.length - 8  == slide) return false;
    setSlide(slide + 3);
  };
  const previous = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-9/12 flex justify-around md:justify-between  my-5">
        <p className="text-2xl m-2 font-bold">What's on your mind?</p>
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
      <div className="w-10/12 md:w-8/12 flex overflow-hidden border-b-2 border-gray-400">
        <div className=" flex md:space-x-4 ">
          {images.map((image, index) => (
            <div
              style={{ transform: `translateX(-${slide * 100}%)` }}
              key={index}
              className="w-[150px] m-5 cursor-pointer duration-300"
            >
              <img className="w-80" src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;
