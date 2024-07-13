import { MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/fetures/products/productsApi";
import AdminProductsSkeleton from "@/components/skeleton/AdminProductsSkeliton";

type products = {
  title: string;
  _id: string;
  createdAt: string;
  quantity: number;
  price: number;
  status: string;
};
const Product = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({
    limit: 10,
  });

  const [deleteProducts] = useDeleteProductMutation();

  if (isLoading) {
    return <AdminProductsSkeleton />;
  }

  return (
    <div>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Product</CardTitle>
                <CardDescription>Showing all products</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Price
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Total Quantity
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Created at
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.data.map((product: products) => (
                      <TableRow key={product._id}>
                        <TableCell className="hidden sm:table-cell"></TableCell>
                        <TableCell className="font-medium">
                          {product.title}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{product.status}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ${product.price}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product.quantity}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {new Date(product.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => deleteProducts(product._id)}
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of{" "}
                  <strong>{products.total}</strong> products
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Product;
