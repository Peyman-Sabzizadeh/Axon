export type User = {
  id: number;
  created_at: string;
  name: string;
  age: number | null;
  job: string | null;
  income: number | null;
  country: string | null;
  gender: string | null;
  national_id: number | null;
  isMarried: boolean | null;
  child: number | null;
  image: string | null;
  role: "user" | "admin" | null;
};

type TableRowProps = {
  user: User;
};

function TableRow({ user }: TableRowProps) {
  return (
    <tr className="border-b *:px-3 *:py-0.5 hover:bg-violet-50/85">
      <td>{user.id < 10 ? `0${user.id}` : user.id}</td>
      <td>{user.name}</td>
      <td>{user.age ?? "-"}</td>
      <td>{user.job ?? "-"}</td>
      <td>{user.income ?? "-"}</td>
      <td>{user.country ?? "-"}</td>
      <td>{user.gender ?? "-"}</td>
      <td>{user.national_id}</td>
      <td>{String(user.isMarried ?? "-")}</td>
      <td>{user.child ?? "-"}</td>
      <td>
        <img
          src={user.image ?? "/User.png"}
          alt={`${user.name} picture`}
          className="w-14 rounded-lg"
        />
      </td>
      <td>{user.role}</td>
    </tr>
  );
}
export default TableRow;
