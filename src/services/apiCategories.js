import supabase from "./supabase";

export async function getCategories() {
  let { data: categories, error } = await supabase
    .from("categories")
    .select("*");
  return categories;
}
