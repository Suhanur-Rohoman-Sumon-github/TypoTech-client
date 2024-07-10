import image from "../../assets/WhatsApp Image 2024-07-10 at 2.46.53 PM.jpeg";
import ScrollToTop from "../cutom/useScrolltoTop";
const PaymentConfirmPage = () => {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <ScrollToTop />
      <img
        src={image}
        alt="Confirmation"
        className="mx-auto mb-8 h-64 w-[300px]"
      />
      <h1 className="text-3xl font-semibold mb-4 ">
        Thank You for Your Purchase!
      </h1>
      <p className="text-lg">
        Your order has been successfully placed. We will send you a confirmation
        email shortly. If you have any questions, feel free to contact our
        support team.
      </p>
    </div>
  );
};

export default PaymentConfirmPage;
