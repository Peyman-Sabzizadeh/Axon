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
  return <h1>{user.name}</h1>;
}
export default TableRow;
