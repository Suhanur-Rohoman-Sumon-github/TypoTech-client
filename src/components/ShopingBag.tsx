import { MdDelete } from "react-icons/md";
const ShoppingBag = () => {
  const staticItem = {
    image:
      "https://mechanicalkeyboards.com/cdn/shop/files/FullSize_Collection.jpg?v=1700508291&width=360",
    title: "Sample Product",
    price: 29.99,
    quantity: 1,
  };

  return (
    <div className="flex flex-col">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="shopping-bag-item flex  rounded-lg p-4  mt-4 "
        >
          <div className="image-container w-1/3">
            <img
              src={staticItem.image}
              alt={staticItem.title}
              className="w-48 h-32"
            />
          </div>
          <div className="details-container w-2/3 flex flex-col justify-between ml-4">
            <div className="title-price">
              <h3 className="text-2xl font-bold">{staticItem.title}</h3>
              <p className=" text-[#7C3FFF]">${staticItem.price}</p>
            </div>
            <div className="actions flex justify-between items-center mt-4 ">
              <div className="quantity-controls flex items-center">
                <button className="px-2 py-1 bg-gray-200 rounded-l-lg">
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">
                  {staticItem.quantity}
                </span>
                <button className="px-2 py-1 bg-gray-200 rounded-r-lg">
                  +
                </button>
              </div>

              <button className=" text-2xl text-red-500 rounded-lg">
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
