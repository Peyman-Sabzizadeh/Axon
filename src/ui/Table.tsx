import { useUsers } from "@/hooks/useUsers";
import TableRow from "./TableRow";
import { Error } from "./Error";
import Spinner from "./Spinner";

function Table() {
  const { Users, isPending, error } = useUsers();
  if (error) return <Error>There was an error while fetching data</Error>;
  if (isPending) return <Spinner />;
  return (
    <div className="overflow-x-auto rounded-lg font-nunito">
      <table className="text-left">
        <thead className="bg-violet-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Job</th>
            <th className="px-4 py-2">Income</th>
            <th className="px-4 py-2">Country</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">National ID</th>
            <th className="px-4 py-2">Married</th>
            <th className="px-4 py-2">Child</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {Users?.map((user) => <TableRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
