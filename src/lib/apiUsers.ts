import supabase from "./supabase";

export async function getUsers() {
  const { data: Users, error } = await supabase.from("Users").select("*");
  if (error) {
    console.error(error);
    throw new Error("Users could not be loaded");
  }
  return Users;
}
