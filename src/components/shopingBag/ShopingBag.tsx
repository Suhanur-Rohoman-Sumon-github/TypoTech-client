import {
  useDeleteProductsMutation,
  useGetSingleUSerCartQuery,
} from "@/redux/fetures/cards/cardsApi";
import { MdDelete } from "react-icons/md";

type TShopping = {
  _id: string;
  id: string;
  image: string;
  title: string;
  price: number;
};

const ShoppingBag = () => {
  const userId = localStorage.getItem("userId");
  const [deleteProducts] = useDeleteProductsMutation();
  const { data: userCardsData } = useGetSingleUSerCartQuery(userId);

  const handleCartProductsDelete = async (id: string) => {
    const deletes = await deleteProducts(id);
    console.log(deletes);
  };

  return (
    <div className="flex flex-col">
      {userCardsData?.data.map((cart: TShopping) => (
        <div
          key={cart.id}
          className="shopping-bag-item flex  rounded-lg p-4  mt-4 border"
        >
          <div className="image-container w-1/3">
            <img src={cart.image} alt={cart.title} className="w-48 h-32" />
          </div>
          <div className="details-container w-2/3 flex flex-col justify-between ml-4">
            <div className="title-price">
              <h3 className="text-2xl font-bold">
                {" "}
                {cart.title && cart.title.length > 10
                  ? cart.title.slice(0, 10) + "..."
                  : cart.title}
              </h3>
              <p className=" text-[#7C3FFF]">${cart.price.toFixed(2)}</p>
            </div>
            <div className="actions flex justify-between items-center mt-4 ">
              <div></div>

              <button
                onClick={() => handleCartProductsDelete(cart._id)}
                className=" text-2xl text-red-500 rounded-lg"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingBag;
