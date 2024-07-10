import MyBag from "@/components/checkot/MyBag";
import Payment from "@/components/checkot/Payment";
import PaymentConfirmPage from "@/components/checkot/PaymentConfirmPage";
import PersonalInformation from "@/components/checkot/PersonalInformation";
import Shiping from "@/components/checkot/Shiping";
import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const StepIndicator = ({ step, title }) => (
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <div
          className={`rounded-full w-10 h-10 flex items-center justify-center ${
            step <= currentStep ? "bg-[#7C3FFF]" : "bg-gray-300"
          }`}
        >
          {step < currentStep ? (
            <IoCheckmarkSharp className="text-white" />
          ) : (
            <span
              className={`text-white ${
                step === currentStep ? "font-bold" : ""
              }`}
            >
              {step}
            </span>
          )}
        </div>
        <span className="mt-2 text-sm text-center ">
          {" "}
          {step < currentStep ? (
            <IoCheckmarkSharp className="text-white" />
          ) : (
            <span
              className={`text-[#7C3FFF] ${
                step === currentStep ? "font-bold" : ""
              }`}
            >
              {title}
            </span>
          )}
        </span>
      </div>
      {step < 4 && <div className="flex-1 border-t border-gray-300 mx-2"></div>}
    </div>
  );

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  return (
    <div className="container mx-auto my-32">
      <div className="flex items-center justify-center space-x-4">
        <StepIndicator step={1} title={"My bag"} />
        <div className="border-t border-[#7C3FFF] flex-1"></div>
        <StepIndicator step={2} title={"Information"} />
        <div className="border-t border-[#7C3FFF] flex-1 "></div>
        <StepIndicator step={3} title={"Shipping"} />
        <div className="border-t border-[#7C3FFF] flex-1"></div>
        <StepIndicator step={4} title={"Payment"} />
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          {currentStep === 1 && <MyBag />}
          {currentStep === 2 && <PersonalInformation />}
          {currentStep === 3 && <Shiping />}
          {currentStep === 4 && <Payment />}
          {currentStep === 5 && <PaymentConfirmPage />}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-300 rounded-md text-[#7C3FFF]"
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={currentStep === 5}
          className="button-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Checkout;
