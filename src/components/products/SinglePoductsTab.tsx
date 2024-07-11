import { useState } from "react";

type SingleProductsTabProps = {
  descriptions: string;
  policy: string;
};
const SinglePoductsTab = ({ descriptions, policy }: SingleProductsTabProps) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${
            activeTab === "description"
              ? "text-[#7C3FFF] border-b-2 border-[#7C3FFF]"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={`px-4 py-2 ${
            activeTab === "shipping"
              ? "text-[#7C3FFF] border-b-2 border-[#7C3FFF]"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("shipping")}
        >
          Shipping & Returns
        </button>
      </div>
      <div className="p-4">
        {activeTab === "description" && (
          <div>
            <h2 className="text-xl font-bold">Product Description</h2>
            <p>{descriptions}</p>
          </div>
        )}

        {activeTab === "shipping" && (
          <div>
            <h2 className="text-xl font-bold">Shipping & Returns</h2>
            <p>{policy}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePoductsTab;
