import { Link, useParams } from "react-router-dom";
import { useProductDetailsQuery } from "../hooks/useProductDetailsQuery";
import { ArrowLeftIcon } from "lucide-react";

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data } = useProductDetailsQuery({ id });

  if (!id) {
    return <div>no id given</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-4xl p-8">
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
          <button className="w-full rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
