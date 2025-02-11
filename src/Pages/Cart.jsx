// import { NavBar } from "../Component";

import { NavBar } from "../Component";

const Cart = () => {
  return (
    <>
      <NavBar />
      <div className=" bg-white min-h-screen">
        <div className="p-10">
          <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
          <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
