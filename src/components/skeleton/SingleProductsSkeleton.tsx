import { Skeleton } from "../ui/skeleton";

const SingleProductsSkeleton = () => {
  return (
    <div className="container md:mt-32">
      <div className="md:flex items-center justify-between">
        {/* Left side: Product image */}
        <div className="md:w-[80%]">
          <Skeleton className="w-full h-[400px] mb-4" />
          {/* Tabs for additional information */}
          <div className="border-b flex">
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="p-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full mt-4" />
            <Skeleton className="h-10 w-full mt-4" />
          </div>
        </div>

        {/* Right side: Product details */}
        <div className="md:w-1/2 p-4 h-full md:ml-9">
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-16 w-full mb-4" />
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-16 w-full mb-4" />
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-10 w-full mb-4" />
        </div>
      </div>

      <div className="mt-32">
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-10 w-full mb-4" />
      </div>

      <div className="py-8">
        <Skeleton className="h-10 w-full mb-4" />
        <div className="grid gap-4 col-span-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Display skeleton cards */}
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-80 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductsSkeleton;
