import { Input } from "../ui/input";
import { IoRocket } from "react-icons/io5";

const TotalCharges = ({ total, shipping, tax, subtotal }) => {
  return (
    <div className=" p-4 rounded-lg bg-[#F4F4F4] h-full">
      <h2 className="text-xl font-semibold mb-4">Gift card or discount code</h2>
      <div className="flex items-center ">
        <div className="grid w-full  items-center  mb-4">
          <Input
            type="coupon"
            id="coupon"
            placeholder="Enter your coupon code"
          />
        </div>
        <button className="button-icon mb-3">Apply</button>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <span className="font-medium">Subtotal</span>
          <span className="text-[#7C3FFF]">${subtotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Tax</span>
          <span className="text-[#7C3FFF]">${tax?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Shipping</span>
          <span className="text-[#7C3FFF]">${shipping?.toFixed(2)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-bold ">${total?.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default TotalCharges;
