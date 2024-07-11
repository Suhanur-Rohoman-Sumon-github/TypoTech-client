import { MdDelete } from "react-icons/md";
import TotalCharges from "./TotalCharges";
import ScrollToTop from "../cutom/useScrolltoTop";
import { useGetSingleUSerCartQuery } from "@/redux/fetures/cards/cardsApi";
import MyBagSkeleton from "../skeleton/MyBagSkeleton";

const MyBag = () => {
  const userId = localStorage.getItem("userId");

  const { data: userCardsData, isLoading } = useGetSingleUSerCartQuery(userId);

  if (isLoading) {
    return <MyBagSkeleton />;
  }

  // Calculate subtotal
  const subtotal = userCardsData?.data?.reduce(
    (acc, item) => acc + (typeof item.price === "number" ? item.price : 0),
    0
  );

  // Placeholder values for tax and shipping
  const tax = 2.5;
  const shipping = 5.0;

  // Calculate total amount
  const total = subtotal + tax + shipping;

  return (
    <div className="container mx-auto py-8">
      <ScrollToTop />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Shopping Bag */}
        <div className="flex flex-col">
          {userCardsData?.data?.map((item) => (
            <div
              key={item.id}
              className="shopping-bag-item flex bg-white rounded-lg p-4 shadow-md mt-4"
            >
              <div className="image-container w-1/3">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-48 h-full object-cover rounded-lg"
                />
              </div>
              <div className="details-container w-2/3 flex flex-col justify-between ml-4">
                <div className="title-price">
                  <h3 className="text-2xl font-bold">{item?.title}</h3>
                  <p className="text-[#7C3FFF]">${item?.price.toFixed(2)}</p>
                </div>
                <div className="actions flex justify-between items-center mt-4">
                  <div></div>
                  <button className="text-2xl text-red-500 rounded-lg">
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Summary */}
        <div>
          <TotalCharges
            shipping={shipping}
            total={total}
            tax={tax}
            subtotal={subtotal}
          />
        </div>
      </div>
    </div>
  );
};

export default MyBag;
