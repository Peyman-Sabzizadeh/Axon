import supabase from "./supabase";
export async function getSettings() {
  const { data: Settings, error } = await supabase.from("Settings").select("*");
  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return Settings;
}
