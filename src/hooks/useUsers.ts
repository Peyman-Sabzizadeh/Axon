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
  });
  return { Users, isPending, error };
}
