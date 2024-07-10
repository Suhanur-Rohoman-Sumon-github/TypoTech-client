import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const ContactUs = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div
        style={{
          backgroundImage:
            "url(https://mechanicalkeyboards.com/cdn/shop/files/BOOG75_Slide.jpg?v=1713208855&width=1800)",
        }}
        className="bg-cover bg-center h-80 flex items-center justify-center text-white"
      >
        <div className="max-w-lg mx-auto text-center text-[#000]">
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="lg:w-9/12  mx-auto pt-20 flex flex-col lg:flex-row justify-center items-center gap-x-20">
        <div className="lg:w-[40%] p-3 lg:p-0">
          <h5 className="text-xl text-[#7C3FFF] font-cursive mb-5">
            CONTACT OUR SALES TEAM
          </h5>
          <h2 className="text-4xl font-prompt mb-8">
            Increase revenue, accelerate sales pipeline, and improve customer
            retention.
          </h2>
          <div className="flex items-center gap-x-2 mb-5">
            <span className="text-[#7C3FFF] font-prompt text-4xl">20m</span>
            <p className="text-xl font-cursive">users worldwide</p>
          </div>
          <div className="flex items-center gap-x-2 mb-5">
            <span className="text-[#7C3FFF]font-prompt text-4xl">100k</span>
            <p className="text-xl font-cursive">companies use Calendly</p>
          </div>
          <div className="flex items-center gap-x-2 mb-5">
            <span className="text-[#7C3FFF] font-prompt text-4xl">200k</span>
            <p className="text-xl font-cursive">
              countries with monthly active users
            </p>
          </div>
        </div>
        <form className="p-5 lg:w-[40%]">
          <div className="flex justify-between items-center gap-x-2">
            <div className="w-full">
              <Label
                className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]"
                htmlFor="firstName"
              >
                First Name
              </Label>
              <Input
                placeholder="Enter your first name"
                type="name"
                required
                className="input block w-full input-bordered"
                id="firstName"
              />
            </div>
            <div className="w-full">
              <Label
                className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]"
                htmlFor="lastName"
              >
                Last Name
              </Label>
              <Input
                placeholder="Enter your last name"
                type="name"
                required
                className="input block w-full input-bordered"
                id="lastName"
              />
            </div>
          </div>
          <div>
            <Label
              className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]"
              htmlFor="email"
            >
              Work Email
            </Label>
            <Input
              placeholder="Your Email"
              type="email"
              required
              className="input block w-full input-bordered"
              id="email"
            />
          </div>
          <div>
            <Label
              className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]"
              htmlFor="description"
            >
              How Can We Help You
            </Label>
            <textarea
              className="textarea textarea-bordered w-full"
              id="description"
              rows={3}
              placeholder="Bio"
            ></textarea>
          </div>
          <button className="button-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
