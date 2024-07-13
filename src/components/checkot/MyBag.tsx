import { MdDelete } from "react-icons/md";
import TotalCharges from "./TotalCharges";
import ScrollToTop from "../cutom/useScrolltoTop";
import {
  useDeleteProductsMutation,
  useGetSingleUSerCartQuery,
} from "@/redux/fetures/cards/cardsApi";
import MyBagSkeleton from "../skeleton/MyBagSkeleton";
import Swal from "sweetalert2";
import { useEffect } from "react";

import { useAppDispatch } from "@/redux/hook";
import {
  updatePriceInfo,
  updateProducts,
} from "@/redux/fetures/order/orderSlice";

type cartData = {
  _id: string;
  price: number;
  id: number;
  quantity: number;
  title: string;
  image: string;
};

const MyBag = () => {
  const userId = localStorage.getItem("userId");
  const dispatch = useAppDispatch();
  const [deleteProducts] = useDeleteProductsMutation();

  const { data: userCardsData, isLoading } = useGetSingleUSerCartQuery(userId);

  const subtotal = userCardsData?.data?.reduce(
    (acc: number, item: cartData) => acc + item.price,
    0
  );
  useEffect(() => {
    userCardsData?.data?.reduce(
      (_acc: number, item: cartData) => dispatch(updateProducts([item._id])),
      0
    );
  }, [dispatch, userCardsData?.data]);

  const tax = 2.5;
  const shipping = 5.0;

  const total = subtotal + tax + shipping;

  useEffect(() => {
    const priceInfo = {
      subtotal,
      shipping,
      tax,
      total,
    };

    dispatch(updatePriceInfo(priceInfo));
    dispatch(updateProducts([]));
  }, [subtotal, shipping, tax, total, dispatch]);

  const handleCartProductsDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      deleteProducts(id);

      Swal.fire("Deleted!", "Your product has been deleted.", "success");
    }
  };

  if (isLoading) {
    return <MyBagSkeleton />;
  }

  return (
    <div className="container mx-auto py-8">
      <ScrollToTop />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Shopping Bag */}
        <div className="flex flex-col">
          {userCardsData?.data?.map((item: cartData) => (
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
                  <div>
                    <p className="text-[#7C3FFF]">Quantity : {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => handleCartProductsDelete(item._id)}
                    className="text-2xl text-red-500 rounded-lg"
                  >
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
