import { useState } from "react";
import { ProductCard, ProductCardSkeleton } from "../components/product-card";
import { useAllProductsQuery } from "../hooks/useAllProductsQuery";
import { Pagination } from "../components/pagination";
import { Link } from "react-router-dom";

function ProductsLoading() {
  return new Array(4).fill(0).map(() => {
    return <ProductCardSkeleton />;
  });
}

const PRODUCTS_PER_PAGE = 10;

export function ProductsPage() {
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "category" | undefined>(
    undefined,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const { data: products, isLoading, isError } = useAllProductsQuery();

  if (isError) {
    return <div>Error</div>;
  }

  const sortedProducts = [...(products || [])].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const totalPages = Math.ceil((sortedProducts?.length || 0) / PRODUCTS_PER_PAGE);

  return (
    <div className="flex w-full flex-col items-center gap-4 md:px-24">
      <div>
        <h1 className="text-3xl font-bold">All Products</h1>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <select
          className="rounded-md border border-gray-300 bg-white px-4 py-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
        >
          <option value="">Sort By...</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="category">Category</option>
        </select>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
        <Link
          to="/product/create"
          className="rounded-md border border-gray-300 bg-red-500 px-4 py-2 text-center text-white transition-colors hover:bg-blue-600"
        >
          Create Product
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-wrap gap-4 md:flex-row">
        {isLoading && <ProductsLoading />}
        {!isLoading &&
          paginatedProducts.map((product) => {
            return <ProductCard product={product} />;
          })}
      </div>
    </div>
  );
}
