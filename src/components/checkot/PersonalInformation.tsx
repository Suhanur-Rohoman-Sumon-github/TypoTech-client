import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import {
  updateContactInfo,
  updateIsSubmitted,
} from "@/redux/fetures/order/orderSlice";
import ScrollToTop from "../cutom/useScrolltoTop";
import OrderSummary from "./OrderSumMary";

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
};

const PersonalInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(updateContactInfo(data));
    dispatch(updateIsSubmitted(true));
    reset();
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
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
                {...register("firstName", { required: true })}
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.firstName && (
                <span className="text-red-500">First Name is required</span>
              )}
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
                {...register("lastName", { required: true })}
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.lastName && (
                <span className="text-red-500">Last Name is required</span>
              )}
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
                {...register("address", { required: true })}
                placeholder="Enter your address"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.address && (
                <span className="text-red-500">Address is required</span>
              )}
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
                {...register("city", { required: true })}
                placeholder="Enter your city"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.city && (
                <span className="text-red-500">City is required</span>
              )}
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
                {...register("zip", { required: true })}
                placeholder="Enter your zip code"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.zip && (
                <span className="text-red-500">Zip Code is required</span>
              )}
            </div>
            <button
              type="submit"
              className="button-primary px-4 py-2 rounded-md w-full"
            >
              save
            </button>
          </form>
        </div>

        {/* Right side: Order Summary */}
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
