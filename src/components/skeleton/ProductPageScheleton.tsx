import { Skeleton } from "../ui/skeleton";

const ProductPageScheleton = () => {
  return (
    <div className="mx-auto py-8 pl-2 ">
      <div className="grid grid-cols-4 gap-4 md:container">
        <div className="col-span-1">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-4 w-3/4 mt-2" />
          <Skeleton className="h-4 w-1/2 mt-2" />
          <Skeleton className="h-10 w-full mt-4" />
          <Skeleton className="h-4 w-3/4 mt-2" />
          <Skeleton className="h-4 w-1/2 mt-2" />
          <Skeleton className="h-10 w-full mt-4" />
          <Skeleton className="h-4 w-3/4 mt-2" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
        <div className="col-span-3 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductPageScheleton;
