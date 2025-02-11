import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { images } from "../data/Constant";

const FirstSlider = () => {
  const [slide, setSlide] = useState(0);

  const Next = () => {
    console.log(images.length);
    if (images.length - 8 == slide) return false;
    setSlide(slide + 3);
  };
  const previous = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-9/12 flex justify-around md:justify-between  my-5">
        <p className="text-2xl m-2 font-bold">What&apos;s on your mind?</p>
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
