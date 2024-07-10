import { MdDelete } from "react-icons/md";
import TotalCharges from "./TotalCharges";
import ScrollToTop from "../cutom/useScrolltoTop";

const MyBag = () => {
  const cartItems = [
    {
      id: 1,
      name: "Sample Product 1",
      price: 29.99,
      quantity: 2,
      image:
        "https://mechanicalkeyboards.com/cdn/shop/files/FullSize_Collection.jpg?v=1700508291&width=360",
    },
    {
      id: 2,
      name: "Sample Product 2",
      price: 19.99,
      quantity: 1,
      image:
        "https://mechanicalkeyboards.com/cdn/shop/files/FullSize_Collection.jpg?v=1700508291&width=360",
    },
  ];

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
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
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="shopping-bag-item flex bg-white rounded-lg p-4 shadow-md mt-4"
            >
              <div className="image-container w-1/3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-48 h-full object-cover rounded-lg"
                />
              </div>
              <div className="details-container w-2/3 flex flex-col justify-between ml-4">
                <div className="title-price">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-[#7C3FFF]">${item.price.toFixed(2)}</p>
                </div>
                <div className="actions flex justify-between items-center mt-4">
                  <div className="quantity-controls flex items-center">
                    <button className="px-2 py-1 bg-gray-200 rounded-l-lg">
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">
                      {item.quantity}
                    </span>
                    <button className="px-2 py-1 bg-gray-200 rounded-r-lg">
                      +
                    </button>
                  </div>
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
