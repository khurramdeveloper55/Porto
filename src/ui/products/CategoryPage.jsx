import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "../../services/apiFetchProducts";

export default function CategoryPage() {
  const { categoryName } = useParams();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", categoryName],
    queryFn: () => fetchProductsByCategory(categoryName),
    enabled: !!categoryName,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  if (!products || products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Category {categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-lg font-medium">{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
