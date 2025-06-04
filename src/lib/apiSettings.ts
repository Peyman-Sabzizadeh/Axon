import supabase from "./supabase";
export async function getSettings() {
  const { data: Settings, error } = await supabase.from("Settings").select("*");
  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return Settings;
}
export async function updateSetting(newSetting: number | string | undefined) {
  const { data: Setting, error } = await supabase
    .from("Settings")
    .update({ ["user_per_page"]: Number(newSetting) })
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq("id", 1)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Setting could not be updated");
  }
  return Setting;
}
