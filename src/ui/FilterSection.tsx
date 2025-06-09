import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  function handleReset() {
    setFilters({
      country: "",
      gender: "",
      isMarried: "",
      role: "",
    });
  }
  return (
    <div className="flex gap-2 *:rounded-lg *:p-1">
      <Select
        value={filters.country}
        onValueChange={(value) => setFilters((f) => ({ ...f, country: value }))}
      >
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Iran">Iran</SelectItem>
          <SelectItem value="USA">USA</SelectItem>
          <SelectItem value="Germany">Germany</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={filters.gender}
        onValueChange={(value) => setFilters((f) => ({ ...f, gender: value }))}
      >
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={filters.isMarried}
        onValueChange={(value) =>
          setFilters((f) => ({ ...f, isMarried: String(value) }))
        }
      >
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Married" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="true">Married</SelectItem>
          <SelectItem value="false">Single</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={filters.role}
        onValueChange={(value) => setFilters((f) => ({ ...f, role: value }))}
      >
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
      <Button
        className="w-18 cursor-pointer bg-indigo-400 hover:bg-indigo-500"
        onClick={handleReset}
      >
        Reset
      </Button>
    </div>
  );
}
export default FilterSection;
