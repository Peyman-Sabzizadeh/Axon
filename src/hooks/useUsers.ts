import { getUsers } from "@/lib/apiUsers";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  const {
    data: Users,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: getUsers,
    retry: false,
  });
  return { Users, isPending, error };
}
