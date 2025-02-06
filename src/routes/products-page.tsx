import { ProductsLayout } from "../components/layouts/products-layout";
import { ProductCard, ProductCardSkeleton } from "../components/product-card";
import { useAllProductsQuery } from "../hooks/useAllProductsQuery";

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
  const { data, isLoading } = useAllProductsQuery();

  return (
    <ProductsLayout>
      <div className="flex flex-wrap items-center justify-between gap-4 px-24">
        {isLoading && <ProductsLoading />}
        {!isLoading &&
          data?.map((product) => {
            return (
              <div className="flex w-1/4 justify-center">
                <ProductCard key={product.id} product={product} />
              </div>
            );
          })}
      </div>
    </ProductsLayout>
  );
}
