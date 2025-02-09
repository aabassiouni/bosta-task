import { FormProvider, useForm } from "react-hook-form";
import { useCategoriesQuery } from "../hooks/useCategoriesQuery";
import { useCreateProductMutation } from "../hooks/useCreateProductMutation";
import { Product } from "../types";

export function CreateProductPage() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      category: "",
      image: "",
    },
  });
  const { data: categories } = useCategoriesQuery();
  const { mutateAsync: createProduct } = useCreateProductMutation({
    onSuccess(data) {
      console.log(data);
      alert("Product created successfully!");
    },
  });

  async function handleSubmit(data: Omit<Product, "id">) {
    await createProduct(data);
  }

  return (
    <FormProvider {...form}>
      <h1 className="px-24 pb-4 text-3xl font-bold">Create Product</h1>
      <div className="mx-auto max-w-lg px-24">
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              id="title"
              type="text"
              required
              className="rounded-md border border-gray-300 bg-white px-4 py-2"
              {...form.register("title", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="rounded-md border border-gray-300 bg-white px-4 py-2"
              rows={4}
              required
              {...form.register("description", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="font-medium">
              Price
            </label>
            <input
              id="price"
              type="number"
              step="0.01"
              required
              className="rounded-md border border-gray-300 bg-white px-4 py-2"
              {...form.register("price", { required: true, min: 0 })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-medium">
              Category
            </label>
            <select
              id="category"
              required
              className="rounded-md border border-gray-300 bg-white px-4 py-2"
              {...form.register("category", { required: true })}
            >
              <option value="">Select a category...</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="imageUrl" className="font-medium">
              Image URL
            </label>
            <input
              id="imageUrl"
              type="text"
              required
              className="rounded-md border border-gray-300 bg-white px-4 py-2"
              {...form.register("image", { required: true })}
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
          >
            Create Product
          </button>
        </form>
      </div>
    </FormProvider>
  );
}
