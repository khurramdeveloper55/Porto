import supabase from "./supabase";

export async function getProducts(categoryId) {
  let { data: products, error } = await supabase.from("products").select("*");

  console.log("Products response:", products);
  console.log("Error:", error);

  if (error) {
    console.error("Error fetching products:", error.message);
  }
  return products;
}
