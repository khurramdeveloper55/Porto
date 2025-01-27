import supabase from "./supabase";

export async function fetchProductImages(productId) {
  const { data: products, error } = await supabase
    .from("products")
    .select("product_images")
    .eq("id", productId);

  if (error) {
    console.error("Error fetching product images:", error.message);
    return [];
  }

  const images = products.flatMap((product) => product.product_images || []);

  return images;
}
