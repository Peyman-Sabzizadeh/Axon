type FilterState = {
  country: string;
  gender: string;
  isMarried: string;
  role: string;
};

type FilterProps = {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

function FilterSection({ filters, setFilters }: FilterProps) {
  return (
    <div className="flex gap-2 *:rounded-lg *:border *:p-1 *:text-sm">
      <select
        value={filters.country}
        onChange={(e) => setFilters((f) => ({ ...f, country: e.target.value }))}
      >
        <option value="">All Countries</option>
        <option value="Iran">Iran</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select>

      <select
        value={filters.gender}
        onChange={(e) => setFilters((f) => ({ ...f, gender: e.target.value }))}
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
        value={filters.isMarried}
        onChange={(e) =>
          setFilters((f) => ({ ...f, isMarried: e.target.value }))
        }
      >
        <option value="">All</option>
        <option value="true">Married</option>
        <option value="false">Single</option>
      </select>

      <select
        value={filters.role}
        onChange={(e) => setFilters((f) => ({ ...f, role: e.target.value }))}
      >
        <option value="">All Roles</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}
export default FilterSection;
