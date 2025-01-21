import supabase from "./supabase";

export async function fetchProductDetails(productId) {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }

  return products;
}
