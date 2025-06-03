import { getSettings } from "@/lib/apiSettings";
import { useQuery } from "@tanstack/react-query";

export function useSettings() {
  const {
    data: Settings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Settings"],
    queryFn: getSettings,
  });
  return { Settings, isLoading, error };
}
