import MyBag from "@/components/checkot/MyBag";
import PaymentConfirmPage from "@/components/checkot/PaymentConfirmPage";
import PersonalInformation from "@/components/checkot/PersonalInformation";
import Shiping from "@/components/checkot/Shiping";
import StepIndicator from "@/components/checkot/StepIndecator";
import ScrollToTop from "@/components/cutom/useScrolltoTop";
import { useCreateOrderMutation } from "@/redux/fetures/order/orderApi";
import { useAppSelector } from "@/redux/hook";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const isStripe = useAppSelector((state) => state.payment.isStripe);
  const { orderInfo, isSubmitted } = useAppSelector((state) => state.orders);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const [createOrder] = useCreateOrderMutation();
  const handleConfirmOrder = async () => {
    createOrder(orderInfo);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="container mx-auto my-32">
      <div className="flex items-center justify-center space-x-4">
        <StepIndicator step={1} title={"My bag"} currentStep={currentStep} />
        <div className="border-t border-[#7C3FFF] flex-1"></div>
        <StepIndicator
          step={2}
          title={"Information"}
          currentStep={currentStep}
        />
        <div className="border-t border-[#7C3FFF] flex-1 "></div>
        <StepIndicator step={3} title={"Shipping"} currentStep={currentStep} />
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          <ScrollToTop />
          {currentStep === 1 && <MyBag />}
          {currentStep === 2 && <PersonalInformation />}
          {currentStep === 3 && <Shiping />}
          {currentStep === 4 && <PaymentConfirmPage />}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        {currentStep > 1 && (
          <button
            onClick={handlePreviousStep}
            className="px-4 py-2 bg-gray-300 rounded-md text-[#7C3FFF]"
          >
            Previous
          </button>
        )}
        {currentStep === 1 ? (
          <button
            onClick={handleNextStep}
            className="button-primary px-4 py-2 rounded-md"
          >
            Continue
          </button>
        ) : null}
        {currentStep === 2 && isSubmitted ? (
          <button
            onClick={handleNextStep}
            className="button-primary px-4 py-2 rounded-md"
          >
            Continue
          </button>
        ) : null}
        {currentStep === 3 && !isStripe ? (
          <button
            onClick={handleConfirmOrder}
            className="button-primary px-4 py-2 rounded-md"
          >
            Confirm Order
          </button>
        ) : null}
        {currentStep === 4 ? (
          <div className="flex justify-between items-center">
            <div>
              <Link to={"/products"}>
                <button
                  onClick={handleNextStep}
                  className="button-primary px-4 py-2 rounded-md"
                >
                  Go to Product Page
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Checkout;
