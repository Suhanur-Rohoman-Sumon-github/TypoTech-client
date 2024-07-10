import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Black___Blue_Minimalist_Modern_Initial_Font_Logo-removebg-preview.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import ShopingBag from "@/components/ShopingBag";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:fixed md:z-50 md:top-0 md:w-10/12 md:mx-auto  md:left-[105px] md:mt-6">
      <div className="">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className=" text-2xl font-bold">
              <img src={logo} className="h-20 w-20 rounded-full" alt="" />
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-4 text-[#000000] font-bold">
            <NavLink to="/" className=" hover: cursor-pointer text-[#00000]">
              Home
            </NavLink>
            <NavLink
              to="/products"
              className=" hover: cursor-pointer text-[#00000]"
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className=" hover: cursor-pointer text-[#00000] font-bold"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className=" hover: cursor-pointer text-[#00000] font-bold"
            >
              Contact
            </NavLink>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="h-8 w-8">
              <IoSearchSharp className="h-8 w-8" />
            </div>
            <div className="">
              <Sheet>
                <SheetTrigger>
                  <FaShoppingCart className="h-8 w-8" />
                </SheetTrigger>
                <SheetContent className="max-h-screen overflow-y-scroll p-4 max-w-[850px]">
                  <h1 className="text-2xl font-bold p-8 border-b">
                    Shopping Bag{" "}
                    <span className="text-xl text-[#7C3FFF]">(2 Item)</span>{" "}
                  </h1>

                  <ShopingBag />
                  <div className="pb-20">
                    {/* Checkout Button */}
                    <div className=" mt-4">
                      <p className="border p-1 mt-2 text-center">
                        4-interest free payments of $18.75 with Klama.{" "}
                        <span className=" underline  text-[#7C3FFF]">
                          Learn more
                        </span>
                      </p>
                      <Link to={"/checkout"}>
                        <SheetClose className="w-full">
                          <button className="button-primary w-full mt-4">
                            Checkout
                          </button>
                        </SheetClose>
                      </Link>{" "}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <Avatar>
              <AvatarImage
                className="h-8 w-8 rounded-full"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className=" hover: focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/products"
              className="block  hover: px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/projects"
              className="block  hover: px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="block  hover: px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block  hover: px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to="/shop"
              className="block  hover: px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Shop
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
