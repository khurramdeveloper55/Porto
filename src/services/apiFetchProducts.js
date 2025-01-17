import supabase from "./supabase";

export async function fetchProductsByCategory(categoryName) {
  const lowerCaseCategoryName = categoryName.replace(/-/g, " ").toLowerCase();
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .ilike("category", lowerCaseCategoryName); // Filter by category_id

  if (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }

  return products;
}
