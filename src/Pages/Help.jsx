import { Footer, NavBar } from "../Component";

const HelpPage = () => {
  return (
    <>
      <NavBar />

      <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen text-center">
        <section className="mt-10">
          <h2 className="text-3xl font-bold">Help & Support</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Need assistance? We&rsquo;re here to help! Browse our FAQs or
            contact our support team.
          </p>
        </section>

        <div className="mt-10 max-w-3xl mx-auto text-left">
          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <div className="mt-4 space-y-3">
            <details className="bg-white p-4 shadow-md rounded-md transition-all duration-150 open:pb-2">
              <summary className="font-semibold cursor-pointer">
                How do I place an order?
              </summary>
              <p className="text-gray-600 mt-2 pb-4">
                Browse the menu, select your desired items, add them to your
                cart, and proceed to checkout. You can review your order details
                before making the payment.
              </p>
            </details>

            <details className="bg-white p-4 shadow-md rounded-md transition-all duration-150  open:pb-2">
              <summary className="font-semibold cursor-pointer">
                What payment methods do you accept?
              </summary>
              <p className="text-gray-600 mt-2 pb-4">
                We accept major credit and debit cards, UPI transactions, and
                popular digital wallets like PayPal and Google Pay. Payment
                security is our top priority, ensuring safe and seamless
                transactions.
              </p>
            </details>

            <details className="bg-white p-4 shadow-md rounded-md transition-all duration-150  ">
              <summary className="font-semibold cursor-pointer">
                How can I track my order?
              </summary>
              <p className="text-gray-600 mt-2 pb-4">
                Navigate to the 'Orders' section in your profile to track your
                order in real-time. You'll receive live updates regarding your
                order status, estimated delivery time, and courier details.
              </p>
            </details>

            <details className="bg-white p-4 shadow-md rounded-md transition-all duration-150  ">
              <summary className="font-semibold cursor-pointer">
                Can I cancel or modify my order?
              </summary>
              <p className="text-gray-600 mt-2 pb-4">
                Yes, orders can be modified or canceled within 10 minutes of
                placement from the 'Orders' section. After this period,
                modifications may not be possible as preparation may have
                started.
              </p>
            </details>

            <details className="bg-white p-4 shadow-md rounded-md transition-all duration-150  ">
              <summary className="font-semibold cursor-pointer">
                Do you offer refunds?
              </summary>
              <p className="text-gray-600 mt-2 pb-4">
                Refunds are available for canceled orders before preparation
                starts or in case of an issue with your order. Contact support
                with your order details for further assistance. Refunds
                typically process within 3-5 business days.
              </p>
            </details>

            <details className="bg-white p-4 shadow-md rounded-md transition-all duration-150 ">
              <summary className="font-semibold cursor-pointer">
                How do I contact customer support?
              </summary>
              <p className="text-gray-600 mt-2 pb-4">
                You can reach our customer support team via email at
                support@example.com or use our live chat feature available on
                our website. Our team is available 24/7 to assist you with any
                concerns.
              </p>
            </details>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HelpPage;
