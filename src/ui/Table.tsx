import { useUsers } from "@/hooks/useUsers";
import TableRow from "./TableRow";
import { Error } from "./Error";
import Spinner from "./Spinner";

function Table() {
  const { Users, isPending, error } = useUsers();
  if (error) return <Error>There was an error while fetching data</Error>;
  if (isPending) return <Spinner />;
  return (
    <div>
      <h1>Users data table</h1>
      {Users?.map((user) => <TableRow user={user} />)}
    </div>
  );
}
export default Table;
