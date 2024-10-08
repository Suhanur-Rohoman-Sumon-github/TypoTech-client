import { setPaymentMethod } from "@/redux/fetures/payments/paymentsSlice";
import { useCreatePaymentIntentMutation } from "@/redux/fetures/payments/paymntApi";
import { useAppDispatch } from "@/redux/hook";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

type CheckoutFormProps = {
  price: number;
};

const CheckoutForm = ({ price }: CheckoutFormProps) => {
  const [clientSecret, setClientSecret] = useState("");
  const [isPaymentIntent, setIsPaymentIntent] = useState(false);

  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const [createPaymentIntent] = useCreatePaymentIntentMutation();

  useEffect(() => {
    if (!isPaymentIntent) {
      createPaymentIntent({ price })
        .unwrap()
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          setIsPaymentIntent(true);
        });
    }
  }, [price, isPaymentIntent, createPaymentIntent]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("[error]", error);
      return;
    }

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: "mr:sumon",
        },
      },
    });

    if (paymentIntent?.status === "succeeded") {
      toast.success("Your payment was successful!");
      dispatch(setPaymentMethod("confirm"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full my-8">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#0069ff",
              "::placeholder": {
                color: "",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="button-primary w-full mt-8"
        type="submit"
        disabled={!stripe}
      >
        Purchase
      </button>
    </form>
  );
};

export default CheckoutForm;
