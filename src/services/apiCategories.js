import supabase from "./supabase";

export async function getCategories() {
  let { data: categories, error } = await supabase.from("categories").select(
    `
      id,
      name,
      image
      `
  );
  if (error) {
    console.error("Error fetching categories", error);
  }
  let categoriesWithProductCount = await Promise.all(
    categories.map(async (category) => {
      const { count, error } = await supabase
        .from("products")
        .select("id", { count: "exact" })
        .eq("product_id", category.id);

      if (error) {
        console.error("Error fetching product count", error);
        return category;
      }
      return { ...category, product_count: count };
    })
  );
  return categoriesWithProductCount;
}
