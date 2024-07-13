import { useForm, Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAddProductsMutation } from "@/redux/fetures/products/productsApi";
import { toast } from "sonner";

const EditProducts = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
      brand: "",
      price: 0,
      quantity: 0,
      description: "",
      policy: "",
      category: "",
      status: "draft",
      image: "",
    },
  });

  const [addproducts] = useAddProductsMutation();

  const onSubmit = (data: Record<string, unknown>) => {
    addproducts(data);
    toast.success("products added successfully");
    reset();
  };

  return (
    <div>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto grid flex-1 auto-rows-max gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button type="submit" size="sm">
                Save Product
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="title">Title</Label>
                      <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                          <Input id="title" type="text" {...field} />
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="brand">Brand</Label>
                      <Controller
                        name="brand"
                        control={control}
                        render={({ field }) => (
                          <Input id="brand" type="text" {...field} />
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="price">Price</Label>
                      <Controller
                        name="price"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Controller
                        name="quantity"
                        control={control}
                        render={({ field }) => (
                          <Input id="quantity" type="number" {...field} />
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="description">Description</Label>
                      <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                          <Textarea
                            id="description"
                            {...field}
                            className="min-h-32"
                          />
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="policy">Policy</Label>
                      <Controller
                        name="policy"
                        control={control}
                        render={({ field }) => (
                          <Textarea
                            id="policy"
                            {...field}
                            className="min-h-32"
                          />
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="category">Category</Label>
                      <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value}
                          >
                            <SelectTrigger
                              id="category"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Logitech">Logitech</SelectItem>
                              <SelectItem value="Razer">Razer</SelectItem>
                              <SelectItem value="Corsair">Corsair</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-3">
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="status">Status</Label>
                      <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value}
                          >
                            <SelectTrigger
                              id="status"
                              aria-label="Select status"
                            >
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="draft">Draft</SelectItem>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => (
                      <Input id="image" type="text" {...field} />
                    )}
                  />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2"></div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button type="submit" size="sm">
              Save Product
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditProducts;
