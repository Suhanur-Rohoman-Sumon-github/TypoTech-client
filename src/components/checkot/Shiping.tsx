import { useAppSelector, useAppDispatch } from "@/redux/hook";
import OrderSumMary from "./OrderSumMary";
import ScrollToTop from "../cutom/useScrolltoTop";
import { setPaymentMethod } from "@/redux/fetures/payments/paymentsSlice";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Shiping = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
  const dispatch = useAppDispatch();
  const { selectedPayment, price } = useAppSelector((state) => state.payment);

  const paymentOptions = [
    { id: 2, name: "Stripe", deliveryTime: "3-5 Business Days" },
    { id: 3, name: "Cash on Delivery", deliveryTime: "5-7 Business Days" },
  ];

  const handlePaymentSelection = (name: string) => {
    dispatch(setPaymentMethod(name));
  };

  return (
    <div className="container mx-auto py-8">
      <ScrollToTop />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Shipping Information */}
        <div className="p-6 rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Shipping Information</h1>
          <p className="mb-6">
            Select a payment method for your purchase. Estimated delivery times
            are provided.
          </p>

          <div className="space-y-4">
            {paymentOptions.map((option) => (
              <div
                key={option.id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                  selectedPayment === option.name
                    ? "border-[#7C3FFF]"
                    : "border-gray-300"
                }`}
                onClick={() => handlePaymentSelection(option.name)}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={option.name}
                    name="payment"
                    value={option.name}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={selectedPayment === option.name}
                    onChange={() => handlePaymentSelection(option.name)}
                  />
                  <label
                    htmlFor={option.name}
                    className="ml-2 block text-sm leading-5 text-gray-700"
                  >
                    {option.name}
                  </label>
                </div>
                <div className="text-sm text-gray-500">
                  {option.deliveryTime}
                </div>
              </div>
            ))}
          </div>

          {selectedPayment === "Stripe" && (
            <div className="mt-6 p-4 border rounded-lg bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">Enter Card Details</h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
              </Elements>
            </div>
          )}
        </div>

        {/* Right side: Summary */}
        <div className="">
          <OrderSumMary />
        </div>
      </div>
    </div>
  );
};

export default Shiping;
