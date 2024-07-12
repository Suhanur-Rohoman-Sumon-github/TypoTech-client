import { Input } from "../ui/input";
import { applyCoupon, setCoupon } from "@/redux/fetures/cupons/cupons";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

type TotalChargesProps = {
  total: number;
  shipping: number;
  tax: number;
  subtotal: number;
};

const TotalCharges = ({
  total,
  shipping,
  tax,
  subtotal,
}: TotalChargesProps) => {
  const dispatch = useAppDispatch();
  const { coupon, errorMessage, isCouponValid, currentPrice, discount } =
    useAppSelector((state) => state.cupon);

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(total));
  };

  // Calculate the total price after applying the discount
  const discountedTotal = currentPrice - currentPrice * discount;

  return (
    <div className="p-4 rounded-lg bg-[#F4F4F4] h-full">
      <h2 className="text-xl font-semibold mb-4">Gift card or discount code</h2>
      <div className="flex items-center">
        <div className="grid w-full items-center mb-4">
          <Input
            type="text"
            id="coupon"
            placeholder="Enter your coupon code"
            value={coupon}
            onChange={(e) => dispatch(setCoupon(e.target.value))}
          />
        </div>
        <button className="button-icon mb-3" onClick={handleApplyCoupon}>
          Apply
        </button>
      </div>
      {isCouponValid && (
        <div className="mb-4 text-green-500">Coupon applied successfully!</div>
      )}
      {!isCouponValid && errorMessage && (
        <div className="mb-4 text-red-500">{errorMessage}</div>
      )}
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
          {isCouponValid ? (
            <div>
              <span className="line-through text-red-500">
                ${currentPrice?.toFixed(2)}
              </span>
              <br />
              <span className="font-bold text-2xl text-[#000]">
                ${discountedTotal?.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="font-bold text-2xl text-[#000]">
              ${total?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalCharges;
