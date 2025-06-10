import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortAsc, SortDesc } from "lucide-react";

type SortProps = {
  sortBy: {
    field: "age" | "income" | "child" | "";
    order: "asc" | "desc";
  };
  setSortBy: React.Dispatch<
    React.SetStateAction<{
      field: "age" | "income" | "child" | "";
      order: "asc" | "desc";
    }>
  >;
};

function SortSection({ sortBy, setSortBy }: SortProps) {
  function handleReset() {
    setSortBy({ field: "", order: "asc" });
  }
  return (
    <div className="flex gap-2 *:rounded-lg *:border *:p-1 *:text-sm">
      <Select
        value={sortBy.field}
        onValueChange={(e: "age" | "income" | "child" | "") =>
          setSortBy((s) => ({ ...s, field: e }))
        }
      >
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="age">Age</SelectItem>
          <SelectItem value="income">Income</SelectItem>
          <SelectItem value="child">Child</SelectItem>
        </SelectContent>
      </Select>

      <Select
        disabled={Boolean(!sortBy.field)}
        value={sortBy.order}
        onValueChange={(e: "asc" | "desc") =>
          setSortBy((s) => ({ ...s, order: e }))
        }
      >
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">
            <SortAsc />
            Ascending
          </SelectItem>
          <SelectItem value="desc">
            <SortDesc />
            Descending
          </SelectItem>
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
export default SortSection;
