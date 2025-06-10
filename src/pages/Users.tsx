import { useUsers } from "@/hooks/useUsers";
import FilterSection from "@/ui/FilterSection";
import SearchInput from "@/ui/SearchInput";
import SortSection from "@/ui/SortSection";
import Spinner from "@/ui/Spinner";
import Table from "@/ui/Table";
import { useState } from "react";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    country: "",
    gender: "",
    isMarried: "",
    role: "",
  });
  const [sortBy, setSortBy] = useState<{
    field: "age" | "income" | "child" | "";
    order: "asc" | "desc";
  }>({ field: "", order: "asc" });

  const { Users, isPending, error } = useUsers();
  const filteredUsers = Users?.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCountry = filters.country
      ? user.country === filters.country
      : true;
    const matchesGender = filters.gender
      ? user.gender === filters.gender
      : true;
    const matchesMarried = filters.isMarried
      ? String(user.isMarried) === filters.isMarried
      : true;
    const matchesRole = filters.role ? user.role === filters.role : true;
    return (
      matchesSearch &&
      matchesCountry &&
      matchesGender &&
      matchesMarried &&
      matchesRole
    );
  });
  const sortedUsers = [...(filteredUsers || [])].sort((a, b) => {
    if (!sortBy.field) return 0;

    const field = sortBy.field;

    const aValue = a[field] ?? 0;
    const bValue = b[field] ?? 0;

    if (sortBy.order === "asc") return aValue - bValue;
    else return bValue - aValue;
  });

  if (isPending) return <Spinner />;
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterSection filters={filters} setFilters={setFilters} />
      <SortSection sortBy={sortBy} setSortBy={setSortBy} />
      <Table Users={sortedUsers} error={error} />
    </div>
  );
}
export default Users;
