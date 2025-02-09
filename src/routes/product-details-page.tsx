import { Link, useParams } from "react-router-dom";
import { useProductDetailsQuery } from "../hooks/useProductDetailsQuery";
import { ArrowLeftIcon } from "lucide-react";
import { useCartStore } from "../stores/cart";
import { Skeleton } from "../components/ui/skeleton";
import Button from "../components/ui/button";

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useProductDetailsQuery({ id });

  const {
    actions: { addItem },
  } = useCartStore();

  if (!id) {
    return <div>No id given</div>;
  }

  if (isError) {
    return (
      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <div className="rounded border border-red-500 bg-red-300 p-4 text-center text-black">
          Error fetching product details
        </div>
      </div>
    );
  }

  if (!data || isLoading) {
    return (
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center px-8 md:justify-start">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="ml-2 h-4 w-24 rounded" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2">
            <Skeleton className="h-96 w-full rounded" />
          </div>
          <div className="p-8 md:w-1/2">
            <Skeleton className="mb-4 h-8 w-3/4 rounded" />
            <Skeleton className="mb-4 h-6 w-1/4 rounded" />
            <div className="mb-6 space-y-2">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-2/3 rounded" />
            </div>
            <Skeleton className="mb-8 h-8 w-1/4 rounded" />
            <Skeleton className="h-12 w-32 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <Link to={"/"}>
        <div className="flex items-center justify-center px-8 md:justify-start">
          <ArrowLeftIcon className="h-8 w-8 text-blue-500" />
          <p className="text-blue-500">Back to products</p>
        </div>
      </Link>
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:w-1/2">
          <img src={data.image} alt={data.title} className="h-96 w-full rounded object-cover" />
        </div>
        <div className="p-8 md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
          <p className="mb-4 text-lg text-gray-600">{data.category}</p>
          <p className="mb-6 text-gray-700">{data.description}</p>
          <p className="mb-8 text-3xl font-bold">${data.price.toFixed(2)}</p>
          <Button onClick={() => addItem(data, 1)}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
