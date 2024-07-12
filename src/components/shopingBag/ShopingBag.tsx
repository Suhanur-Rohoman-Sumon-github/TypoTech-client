import {
  useDeleteProductsMutation,
  useGetSingleUSerCartQuery,
} from "@/redux/fetures/cards/cardsApi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

type TShopping = {
  _id: string;
  id: string;
  image: string;
  title: string;
  price: number;
};

type ShoppingBagProps = {
  SheetClose: React.FC<{ children: React.ReactNode }>;
};

const ShoppingBag = ({ SheetClose }: ShoppingBagProps) => {
  const userId = localStorage.getItem("userId");
  const [deleteProducts] = useDeleteProductsMutation();
  const { data: userCardsData } = useGetSingleUSerCartQuery(userId);

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

              <SheetClose>
                <button
                  onClick={() => handleCartProductsDelete(cart._id)}
                  className=" text-2xl text-red-500 rounded-lg"
                >
                  <MdDelete />
                </button>
              </SheetClose>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingBag;
