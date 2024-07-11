const MyBagSkeleton = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="shopping-bag-item flex bg-white rounded-lg p-4 shadow-md mt-4 animate-pulse"
            >
              <div className="image-container w-1/3 bg-gray-200 rounded-lg h-48"></div>
              <div className="details-container w-2/3 flex flex-col justify-between ml-4">
                <div className="title-price">
                  <div className="bg-gray-200 rounded w-2/3 h-6 mb-2"></div>
                  <div className="bg-gray-200 rounded w-1/3 h-6"></div>
                </div>
                <div className="actions flex justify-between items-center mt-4">
                  <div className="quantity-controls flex items-center">
                    <div className="bg-gray-200 rounded-l-lg w-6 h-6"></div>
                    <div className="px-4 py-1 border-t border-b bg-gray-200 w-8 h-6"></div>
                    <div className="bg-gray-200 rounded-r-lg w-6 h-6"></div>
                  </div>
                  <div className="text-2xl text-red-500 rounded-lg bg-gray-200 w-6 h-6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded w-2/3 h-6 mb-2"></div>
          <div className="bg-gray-200 rounded w-1/3 h-6 mb-2"></div>
          <div className="bg-gray-200 rounded w-1/4 h-6 mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default MyBagSkeleton;
