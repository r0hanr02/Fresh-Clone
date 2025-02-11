import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavBar } from "../Component";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
    .required("Password is required"),
});

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(isSignUp ? "Signing Up" : "Signing In", data);
    // Handle authentication logic here
  };

  return (
    <>
   
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 transform hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            {isSignUp ? "Create an Account" : "Welcome Back!"}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter your email"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                {...register("password")}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter your password"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={() => console.log("Google Sign-In clicked")}
              className="w-full flex items-center justify-center bg-white text-black py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => console.log("U2F/FIDO Sign-In clicked")}
              className="w-full flex items-center justify-center bg-white text-black py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 mt-2"
            >
              🔑 Sign in with Security Key
            </button>
          </div>
          <p className="text-center mt-4 text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"} 
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-500 hover:underline ml-1"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;