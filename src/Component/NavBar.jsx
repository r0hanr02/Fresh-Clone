// import React from 'react'

import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function NavBar() {
  const { user, isLoaded, isSignedIn } = useUser();
  // console.log(user);

  return (
    <>
      <div className="w-full flex items-center justify-center shadow-md sticky top-0 z-50 bg-white">
        <div className="w-full h-20 flex justify-center md:w-11/12 md:justify-between">
          <div className="flex">
            <Link to="/">
              <img
                className="w-20 rounded-2xl mx-10 m-0"
                src="https://img.freepik.com/premium-vector/fresh-food-typography-logo-design-premium-vector_106244-129.jpg?semt=ais_hybrid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="flex hover:text-green-600 hover:cursor-pointer p-2">
              <img className="w-6 m-2" src="briefcase.webp" alt="" />
              <p className="m-2 font-semibold">
                <Link to="/swiggycorporate">Corporate</Link>
              </p>
            </div>

            <div className="flex hover:text-green-600 hover:cursor-pointer p-2">
              <img className="w-6 m-2" src="offer.png" alt="" />
              <Link to="/other">
                <p className="m-2 font-semibold">
                  Offers <sup className="text-blue-600">NEW</sup>
                </p>
              </Link>
            </div>
            <div className="flex hover:text-green-600 hover:cursor-pointer p-2">
              <img className="w-6 m-2" src="question.png" alt="" />
              <p className="m-2 font-semibold">
                <Link to="/help">Help</Link>
              </p>
            </div>
            <div className="flex hover:text-green-600 hover:cursor-pointer p-2">
              <img className="w-6 m-2" src="cart.png" alt="" />
              <p className="m-2 font-semibold">
                <Link to="/cart">Cart</Link>
              </p>
            </div>
            {isSignedIn && isLoaded ? (
              <>
                <UserButton />
                <p className="p-2 font-semibold">{user.firstName}</p>
              </>
            ) : (
              <>
                <div className="flex hover:text-green-600 hover:cursor-pointer p-2">
                  <img className="w-6 m-2" src="log-out.png" alt="" />
                  <p className="m-2 font-semibold">
                    <Link to="/login">Login</Link>
                  </p>
                </div>
                <div
                  className="flex hover:text-green-600 hover:cursor-pointer p-2"
                  title="New User"
                >
                  <img className="w-6 m-2" src="images.png" alt="" />
                  <p className="m-2 font-semibold">
                    <Link to="/signup">New User</Link>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
