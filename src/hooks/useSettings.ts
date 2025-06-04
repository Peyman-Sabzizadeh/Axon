import { getSettings } from "@/lib/apiSettings";
import { useQuery } from "@tanstack/react-query";

export function useSettings() {
  const {
    data: Settings,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Settings"],
    queryFn: getSettings,
  });
  return { Settings, isPending, error };
}
