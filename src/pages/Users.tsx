import { useUsers } from "@/hooks/useUsers";
import SearchInput from "@/ui/SearchInput";
import Spinner from "@/ui/Spinner";
import Table from "@/ui/Table";
import { useState } from "react";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const { Users, isPending, error } = useUsers();
  const filteredUsers = Users?.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  if (isPending) return <Spinner />;
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table Users={filteredUsers} error={error} />
    </div>
  );
}
export default Users;
