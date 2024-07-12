import {
  useCreateNewCardsMutation,
  useGetUserIdQuery,
} from "@/redux/fetures/cards/cardsApi";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { toast } from "sonner";
type SingleProductsDtailsProps = {
  brand: string;
  title: string;
  price: number;
  image: string;
};

const SingleProductsDtails = ({
  brand,
  title,
  price,
  image,
}: SingleProductsDtailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [createCards] = useCreateNewCardsMutation();

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };
  const lstUserId = useGetUserIdQuery(undefined);
  const userIdData = lstUserId?.data?.data?.userId;

  const handleAddToCart = async () => {
    let userId = localStorage.getItem("userId");
    const generatedId = userId;

    if (!userId) {
      let newUserId = "u-1";
      if (userIdData) {
        const lastUserId = userIdData;
        if (lastUserId) {
          const match = lastUserId.match(/^u-(\d+)$/);
          if (match && match[1]) {
            const lastUserIdNumber = parseInt(match[1], 10);
            newUserId = `u-${lastUserIdNumber + 1}`;
          }
        }
      }
      userId = newUserId;
      localStorage.setItem("userId", userId);
    }

    const cartPrice = price * quantity;

    const data = {
      productsId: Math.floor(Math.random() * 1000),
      image,
      title,
      brand,
      quantity,
      price: cartPrice,
      paymentsType: "PayPal",
      userId: generatedId,
      userEmail: "user@example.com",
    };

    try {
      await createCards(data).unwrap();
      toast.success("product added to the card");
    } catch (err) {
      console.error("Failed to create the card:", err);
    }
  };
  return (
    <div className="md:w-1/2 p-4 h-full md:ml-9">
      <p className=""> {brand}</p>
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="flex justify-between items-center my-4 border p-4">
        <p className="text-xl font-semibold text-[#7C3FFF]">{price}</p>
        <p className="flex items-center">
          <FaCheck className="mr-2 text-green-500" />
          In Stock
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-xl font-bold">Quantity</p>
        <div className="flex items-center space-x-2">
          <button
            className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={handleDecrease}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 text-center px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            min="1"
          />
          <button
            className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>
      <p className="border p-1 mt-2 text-center">
        4-interest free payments of $18.75 with Klama.{" "}
        <span className="underline text-[#7C3FFF]">Learn more</span>
      </p>
      <div className="flex space-x-4 my-4">
        <button
          onClick={handleAddToCart}
          className="button-primary w-full text-center mx-auto"
        >
          <MdShoppingCart /> Add to Cart
        </button>
      </div>
      <div className="flex space-x-4 my-4 border">
        {" "}
        <button className="w-full text-center mx-auto p-2 flex items-center justify-center gap-2">
          <GrFavorite /> Favourite
        </button>
      </div>
      <div className="flex justify-between mt-4 w-full gap-4">
        <div className="p-4 border w-full border-gray-300 rounded bg-[#F3EDFF]">
          <p className="font-bold flex items-center gap-2">
            <FaLocationDot className="text-red-500" />
            Find in Store
          </p>
          <p>
            Use our "Find in Store" feature to locate nearby stores carrying
            this product.
          </p>
        </div>
        <div className="p-4 border w-full bg-[#F3EDFF] border-gray-300 rounded">
          <p className="font-bold flex items-center gap-2">
            <IoMdHome className="text-red-500" /> Find Delivery
          </p>
          <p>Choose the best shipping method that suits your needs</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductsDtails;
