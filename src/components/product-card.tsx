import { Link } from "react-router-dom";
import { Product } from "../types";
import { Skeleton } from "./ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="w-64 overflow-hidden rounded-lg bg-white shadow-md">
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
  return (
    <div className="w-72 overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="h-48 w-full object-cover rounded"
      />
      <div className="p-4">
        <h2 className="mb-2 truncate text-lg font-semibold">{product.title}</h2>
        <p className="mb-2 text-gray-600">{product.category}</p>
        <p className="mb-2 line-clamp-2 text-gray-600">{product.description}</p>
        <p className="mb-4 text-xl font-bold">${product.price.toFixed(2)}</p>
        <Link
          to={`/product/${product.id}`}
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
