import { NavLink } from "react-router-dom";
import logo from "../../assets/Black___Blue_Minimalist_Modern_Initial_Font_Logo-removebg-preview.png";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { IoRocket } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-[#dddced] text-[#000000] p-6">
      {/* First section: Title, paragraph, input field, and button */}
      <div className="md:flex items-center justify-between w-10/12 mx-auto">
        <div className="mb-6 max-w-md">
          <NavLink to="/" className=" text-2xl font-bold">
            <img src={logo} className="h-20 w-20 rounded-full" alt="" />
          </NavLink>
          <p className="mb-4 font-bold">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <p className="mb-4 ">
            Join our newsletter to receive the latest updates and promotions. We
            respect your privacy and promise not to spam you.
          </p>
          <div className="flex items-center justify-center">
            <div className="grid w-full max-w-sm items-center ">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <button className="button-icon ">
              <IoRocket />
            </button>
          </div>
        </div>

        {/* Second section: Title, company, and nav links */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Company</h2>
          <nav className="space-y-2">
            <a href="#about" className="text-[#7C3FFF] block">
              About Us
            </a>
            <a href="#services" className="text-[#7C3FFF] block">
              Services
            </a>
            <a href="#contact" className="text-[#7C3FFF] block">
              Contact
            </a>
            <a href="#careers" className="text-[#7C3FFF] block">
              Careers
            </a>
            <a href="#faq" className="text-[#7C3FFF] block">
              FAQ
            </a>
          </nav>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Shop</h2>
          <nav className="space-y-2">
            <a href="#about" className="text-[#7C3FFF] block">
              Gift Cards
            </a>
            <a href="#services" className="text-[#7C3FFF] block">
              Our Products
            </a>
            <a href="#contact" className="text-[#7C3FFF] block">
              My Account{" "}
            </a>
            <a href="#careers" className="text-[#7C3FFF] block">
              Shipping
            </a>
            <a href="#faq" className="text-[#7C3FFF] block">
              Returns
            </a>
          </nav>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Support</h2>
          <nav className="space-y-2">
            <a href="#about" className="text-[#7C3FFF] block">
              Contact Us{" "}
            </a>
            <a href="#services" className="text-[#7C3FFF] block">
              Payment Options
            </a>
            <a href="#contact" className="text-[#7C3FFF] block">
              Store Locator
            </a>
            <a href="#careers" className="text-[#7C3FFF] block">
              Accessibility
            </a>
            <a href="#faq" className="text-[#7C3FFF] block">
              Affiliates
            </a>
          </nav>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">FAQ</h2>
          <nav className="space-y-2">
            <a href="#about" className="text-[#7C3FFF] block">
              Rewards FAQ{" "}
            </a>
            <a href="#services" className="text-[#7C3FFF] block">
              Product Care
            </a>
            <a href="#contact" className="text-[#7C3FFF] block">
              Size Guide
            </a>
            <a href="#careers" className="text-[#7C3FFF] block">
              Careers
            </a>
            <a href="#faq" className="text-[#7C3FFF] block">
              FAQ
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom section: Paragraph text and images */}
      <div className="md:flex justify-between items-center border-t border-gray-600 pt-4 w-10/12 mx-auto">
        <p className="text-[#000]">
          &copy; 2024 Your Company. All rights reserved.
        </p>
        <div className="flex space-x-4 items-center">
          <p>Payment Partners</p>
          <img
            src="data:image/jpeg;base64,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"
            alt="Image 1"
            className="h-4 w-4"
          />
          <img
            src="data:image/png;base64,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"
            alt="Image 2"
            className="h-4 w-4"
          />
          <img
            src="data:image/png;base64,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"
            alt="Image 3"
            className="h-4 w-4"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
