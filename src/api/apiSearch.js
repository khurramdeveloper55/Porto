import supabase from "./supabase";

export const searchProducts = async (searchTerm) => {
  if (!searchTerm) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${searchTerm}%`);

  if (error) throw error;
  return data;
};
