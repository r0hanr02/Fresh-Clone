// import React from "react";
import { Footer, NavBar } from "../Component";
import { items, testimonials } from "../data/Constant";

const SwiggyCorporateMenu = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 min-h-screen">
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold text-gray-800">ABOUT US</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Swiggy is a new-age consumer-first organization offering an
            easy-to-use convenience platform, accessible through a unified app.
          </p>
        </section>

        <div className="mt-6 flex justify-center space-x-8 p-8 flex-wrap">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white p-4 shadow-lg rounded-lg w-60 transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-56 h-40 object-cover mx-auto rounded-md"
              />
              <p className="mt-3 text-xl font-semibold text-gray-700">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <section className="bg-white py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
          <div className="mt-6 flex justify-center space-x-6 flex-wrap">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 shadow-md rounded-lg w-72 transform hover:scale-105 transition duration-300"
              >
                <p className="text-gray-700 italic">&ldquo;{testimonial.review}&ldquo;</p>
                <h4 className="mt-4 font-bold text-green-600">
                  - {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SwiggyCorporateMenu;
