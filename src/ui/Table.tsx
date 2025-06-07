import TableRow, { type User } from "./TableRow";
import { Error } from "./Error";

type TableProps = {
  Users: User[] | undefined;
  error: unknown;
};

function Table({ Users, error }: TableProps) {
  if (error) return <Error>There was an error while fetching data</Error>;
  return (
    <div className="font-nunito overflow-x-auto rounded-lg">
      <table className="text-left">
        <thead className="bg-violet-100">
          <tr className="*:px-4 *:py-2">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>Income</th>
            <th>Country</th>
            <th>Gender</th>
            <th>National ID</th>
            <th>Married</th>
            <th>Child</th>
            <th>Image</th>
            <th>Role</th>
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
