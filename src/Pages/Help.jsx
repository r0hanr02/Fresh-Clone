import React from "react";
import { NavBar } from "../Component";

const Cart = () => {
  return (
    <div className="mt-10 p-6 bg-white shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Cart</h2>
      <p className="text-gray-600">Your cart is empty.</p>
    </div>
  );
};

const HelpPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen text-center">
     

      <section className="mt-10">
        <h2 className="text-3xl font-bold">Help & Support</h2>
        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          Need assistance? We're here to help! Browse our FAQs or contact our support team.
        </p>
      </section>

      <div className="mt-10 max-w-3xl mx-auto text-left">
        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <ul className="mt-4 space-y-3">
          <li className="bg-white p-4 shadow-md rounded-md">
            <strong>How do I place an order?</strong>
            <p className="text-gray-600">Browse the menu, add items to your cart, and proceed to checkout.</p>
          </li>
          <li className="bg-white p-4 shadow-md rounded-md">
            <strong>What payment methods do you accept?</strong>
            <p className="text-gray-600">We accept credit/debit cards, UPI, and digital wallets.</p>
          </li>
          <li className="bg-white p-4 shadow-md rounded-md">
            <strong>How can I track my order?</strong>
            <p className="text-gray-600">Go to the 'Orders' section in your profile to track your order in real-time.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpPage;
