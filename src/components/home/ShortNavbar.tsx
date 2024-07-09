const ShortNavbar = () => {
  return (
    <div className="w-full mx-auto bg-[#7C3FFF] text-white p-1 hidden md:flex">
      <div className="w-10/12 mx-auto  px-4 flex justify-between items-center">
        <p>Support (00) 33 169 7720</p>
        <p>
          Free US shipping an all orders $100+{" "}
          <span className=" underline ">Learn more</span>
        </p>
        <div className="flex space-x-4">
          <span>|</span>
          <a href="#" className="hover:text-gray-400">
            Shipping
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400">
            FAQ
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShortNavbar;
