import { useGetSingleUSerCartQuery } from "@/redux/fetures/cards/cardsApi";
import MyBagSkeleton from "../skeleton/MyBagSkeleton";
import { useAppSelector } from "@/redux/hook";

type cartData = {
  price: number;
  id: number;
  quantity: number;
  title: string;
  image: string;
};

const OrderSummary = () => {
  const { currentPrice, discount } = useAppSelector((state) => state.cupon);
  const userId = localStorage.getItem("userId");
  const { data: userCardsData, isLoading } = useGetSingleUSerCartQuery(userId);

  if (isLoading) {
    return <MyBagSkeleton />;
  }

  const subtotal = userCardsData.data.reduce(
    (acc: number, item: cartData) => acc + item.price,
    0
  );

  const tax = 2.5;
  const shipping = 5.0;

  const total = subtotal + tax + shipping;

  const discountedTotal = currentPrice
    ? currentPrice - currentPrice * discount
    : total - total;

  return (
    <div className="bg-[#F4F4F4] p-2">
      <h1 className="text-3xl font-bold mb-4 text-center">Order Summary</h1>
      <div className="space-y-4">
        {userCardsData?.data.map((item: cartData) => (
          <div
            key={item.id}
            className="flex items-center border rounded-lg p-4"
          >
            <img
              src={item?.image}
              alt={item?.title}
              className="w-24 h-24 rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold">{item?.title}</h3>
              <p className="text-[#7C3FFF]">Quantity: {item?.quantity}</p>
              <p className="text-[#7C3FFF]">${item?.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
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
          {currentPrice ? (
            <div>
              <span className="line-through text-red-500">
                ${total?.toFixed(2)}
              </span>
              <br />
              <span className="font-bold text-2xl text-[#000]">
                ${discountedTotal?.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="font-bold text-2xl">${total?.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
