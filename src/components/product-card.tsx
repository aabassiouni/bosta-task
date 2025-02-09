import { Link } from "react-router-dom";
import { Product } from "../types";
import { Skeleton } from "./ui/skeleton";
import { useCartStore } from "../stores/cart";

export function ProductCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md md:w-72">
      <Skeleton className="h-48 w-full" />
      <div className="p-4">
        <Skeleton className="mb-2 h-6 w-3/4" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-4 h-8 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const {
    actions: { addItem },
  } = useCartStore();

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md md:w-72">
      <img src={product.image} alt={product.title} className="h-48 w-full rounded object-cover" />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold">{product.title}</h2>
        <p className="mb-2 text-gray-600">{product.category}</p>
        <p className="mb-2 line-clamp-2 text-gray-600">{product.description}</p>
        <p className="mb-4 text-xl font-bold">${product.price.toFixed(2)}</p>
        <div className="gap-4 flex justify-between">
          <Link
            to={`/product/${product.id}`}
            className="rounded-lg bg-blue-500 px-4 py-2 text-center text-white transition-colors hover:bg-blue-600"
          >
            View Details
          </Link>
          <button
            className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
            onClick={() => addItem(product, 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
