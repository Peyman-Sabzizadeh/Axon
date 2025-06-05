import { useUsers } from "@/hooks/useUsers";
import Table from "@/ui/Table";

function Users() {
  const { Users } = useUsers();
  console.log(Users);
  return <Table />;
}
export default Users;
