/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";


const MainComponent = () => {
  const filter = [
    "Fast Delivery",
    "New",
    "Rating 4.0+",
    "Pure Veg",
    "Offers",
    "Rs.300-Rs.600",
    "Less than Rs.300",
  ];

  const restaurants = [
    {
      name: "The Gourmet Bistro",
      offer: "20% off on your first order",
      rating: 4.8,
      category: "Fine Dining",
      location: "Colaba, Mumbai",
      img: "https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x1066_crop_center-center_82_line/jonas-jacobsson-1iTKoFJvJ6E-unsplash.jpg"
    },
    {
      name: "Pizza Palace",
      offer: "Buy 1 Get 1 Free on all pizzas",
      rating: 4.5,
      category: "Italian",
      location: "Bandra West, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt69VdP5o8YBDMPIgyU48n9gLnndfcpwe62g&s"
    },
    {
      name: "Sushi Sensation",
      offer: "Free drink with every sushi platter",
      rating: 4.7,
      category: "Japanese",
      location: "Juhu, Mumbai",
      img: "https://images.squarespace-cdn.com/content/v1/597dbe4937c58179fe1b8b26/1614806035341-Y003EMHNSDSL3VUZM963/BKB_4247.JPEG"
    },
    {
      name: "Taco Town",
      offer: "15% off on online orders",
      rating: 4.3,
      category: "Mexican",
      location: "Andheri West, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cG7bpiEqcOUMuq2KgjK-nNLl_IqBW0GtcA&s"
    },
    {
      name: "Burger Haven",
      offer: "Combo meal at half price for new users",
      rating: 4.6,
      category: "American",
      location: "Lower Parel, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_nqB0izMc7blEaCYCj74y60cfyRZwZi57w&s"
    },
    {
      name: "Pasta Paradise",
      offer: "Free dessert with every pasta dish",
      rating: 4.2,
      category: "Italian",
      location: "Breach Candy, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDjADzxRYO9cTXrkV97ZB7giEQDuO2N2zSw&s"
    },
    {
      name: "Curry Craze",
      offer: "Free appetizer with curry combo",
      rating: 4.4,
      category: "Indian",
      location: "Fort, Mumbai",
      img: "https://cdn.sanity.io/images/avf7gvl1/production/63eb90f63b5fa59786f68fe654894c6c6e1a129b-1200x630.jpg"
    },
    {
      name: "Seafood Delight",
      offer: "10% off on seafood platters",
      rating: 4.9,
      category: "Seafood",
      location: "Versova, Mumbai",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/225774/Life-Raft-Seafood-Delight-1.jpg?ixlib=rails-3.0.2&fit=crop&w=1200&h=630"
    },
    {
      name: "Vegan Vibes",
      offer: "25% off for eco-conscious customers",
      rating: 4.6,
      category: "Vegan",
      location: "Andheri East, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6rZqp0cnfXIATmiB9BZq846M-FiydblX_g&s"
    },
    {
      name: "BBQ Bliss",
      offer: "Free side dish with every BBQ platter",
      rating: 4.5,
      category: "Barbecue",
      location: "Kandivali West, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43w1PtBlPqkvNoDSViZYmEihKiN4lcH5wmA&s"
    },
    {
      name: "Pancake House",
      offer: "Buy 1 Get 1 Free on pancakes",
      rating: 4.7,
      category: "Breakfast",
      location: "Parel, Mumbai",
      img: "https://images.squarespace-cdn.com/content/v1/5aa059077c9327ae23b09b78/1678733665891-EO52AMBQM4V13VNFT3RE/IMG_5888.jpg?format=1000w"
    },
    {
      name: "Fried Chicken Factory",
      offer: "20% off for first-time customers",
      rating: 4.8,
      category: "American",
      location: "Goregaon West, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNY7Nnad0VvdxPY5JTVraXnnHaBz3-eWBlSg&s"
    },
    {
      name: "Sushi & Rolls",
      offer: "10% off on sushi rolls",
      rating: 4.6,
      category: "Japanese",
      location: "Marine Drive, Mumbai",
      img: "https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg"
    },
    {
      name: "Noodle Nirvana",
      offer: "Free drink with any noodle dish",
      rating: 4.4,
      category: "Asian",
      location: "Malad East, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCmLtQUcpmmITOaGQ_S0lybEewxwIGiTn6Q&s"
    },
    {
      name: "Steakhouse Supreme",
      offer: "15% off on all steaks",
      rating: 4.9,
      category: "Steakhouse",
      location: "Bandra East, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4iRgDpmLAwITVr9B0HteshgQ4kXx7f_Udfg&s"
    },
    {
      name: "Dim Sum Delight",
      offer: "Buy 2 dim sums, get 1 free",
      rating: 4.7,
      category: "Chinese",
      location: "Vashi, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Fnhe4ZbLjB3xcRR5SKk6VkKXtkWVcKYZ7A&s"
    },
    {
      name: "Smoothie Stop",
      offer: "10% off on all smoothies",
      rating: 4.5,
      category: "Juice Bar",
      location: "Cuffe Parade, Mumbai",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/-LgK7M-8EX2ZvIfJx6G0kA/348s.jpg"
    },
    {
      name: "Bagel Bakery",
      offer: "Free coffee with every bagel",
      rating: 4.3,
      category: "Bakery",
      location: "Bandra West, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMHHtifv80K-uBKZixib6YnRh9AS9ytgYrg&s"
    },
    {
      name: "Fajita Fiesta",
      offer: "Free guacamole with fajita orders",
      rating: 4.6,
      category: "Mexican",
      location: "Juhu, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg09JWAjxTPvvzzCbXsqYV-CoQiA0sPlsbOA&s"
    },
    {
      name: "Ramen Republic",
      offer: "15% off on ramen bowls",
      rating: 4.8,
      category: "Japanese",
      location: "Colaba, Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxFgQ0NV3AtxI8SlzW4OB0Z7f861anJ-fHA&s"
    }
  ];

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
            <div key={index} > 
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
