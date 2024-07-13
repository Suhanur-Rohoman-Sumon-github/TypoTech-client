import { TableCell, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";

const AdminProductsSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell className="hidden sm:table-cell">
            <Skeleton className="w-12 h-12" />
          </TableCell>
          <TableCell className="font-medium">
            <Skeleton className="h-6 w-32" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-16" />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            <Skeleton className="h-6 w-12" />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            <Skeleton className="h-6 w-16" />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            <Skeleton className="h-6 w-24" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-10" />
          </TableCell>
        </TableRow>
      ))}
    </div>
  );
};

export default AdminProductsSkeleton;
