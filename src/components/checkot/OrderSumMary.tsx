const OrderSumMary = () => {
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
    <div>
      <h1 className="text-3xl font-bold mb-4">Order Summary</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border rounded-lg p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-[#7C3FFF]">Quantity: {item.quantity}</p>
              <p className="text-[#7C3FFF]">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-2xl">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSumMary;
