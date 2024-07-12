import ScrollToTop from "../cutom/useScrolltoTop";
import OrderSumMary from "./OrderSumMary";

const PersonalInformation = () => {
  return (
    <div className="container mx-auto py-8">
      <ScrollToTop />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Contact Information */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
          <p className="text-sm mb-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500">
              Log in
            </a>
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="Enter your zip code"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </form>
        </div>

        {/* Right side: Order Summary */}
        <div>
          <OrderSumMary />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
