import CardMap from "@/components/home/CardMap";
import { useParams } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "@/redux/fetures/products/productsApi";
import SingleProductsSkeleton from "@/components/skeleton/SingleProductsSkeleton";
import SinglePoductsTab from "@/components/products/SinglePoductsTab";
import SingleProductsDtails from "@/components/products/SingleProductsDtails";
import SingleProducstCustomerReview from "@/components/products/SingleProducstCustomerReview";

const SingleProducts = () => {
  const { id } = useParams();
  const { data: singleProduct, isLoading: singleProductLoading } =
    useGetSingleProductQuery(id);

  const { data: products, isLoading: productsLoading } = useGetAllProductsQuery(
    { limits: 4 }
  );

  if (singleProductLoading || productsLoading) {
    return <SingleProductsSkeleton />;
  }

  const SingleProducts = singleProduct?.data;

  const { image, title, brand, price, descriptions, policy, ratings } =
    SingleProducts || {};

  return (
    <div className="container md:mt-32">
      <div className="md:flex items-center justify-between">
        {/* Left side: Product image */}
        <div className="md:w-[80%]">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-[300px] object-cover"
            />
          )}
          <SinglePoductsTab descriptions={descriptions} policy={policy} />
        </div>
        <SingleProductsDtails
          brand={brand}
          image={image}
          price={price}
          title={title}
        />
      </div>
      <div className="">
        <div className="mt-32">
          <SingleProducstCustomerReview reviews={ratings} />
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-2xl text-center font-bold mb-8">
          You might also like
        </h1>
        <div className="grid gap-4 col-span-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <CardMap data={products?.data} />
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
