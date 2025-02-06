import { useState } from "react";
import { ProductCard, ProductCardSkeleton } from "../components/product-card";
import { useAllProductsQuery } from "../hooks/useAllProductsQuery";
import { Pagination } from "../components/pagination";

function ProductsLoading() {
  return new Array(4).fill(0).map((_, i) => {
    return (
      <div className="flex w-1/4 justify-center" key={i}>
        <ProductCardSkeleton />
      </div>
    );
  });
}

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

  const productsPerPage = 10;
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  const totalPages = Math.ceil((sortedProducts?.length || 0) / productsPerPage);

  return (
    <div className="flex flex-col gap-4 px-24">
      <div className="flex gap-2">
        <select
          className="rounded-md border border-gray-300 bg-white px-4 py-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
        >
          <option value="">Choose an option</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="category">Category</option>
        </select>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {isLoading && <ProductsLoading />}
        {!isLoading &&
          paginatedProducts.map((product) => {
            return (
              <div className="flex w-1/4 flex-1 justify-center" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
