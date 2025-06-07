import { Search } from "lucide-react";

type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

function SearchInput({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="relative w-full max-w-sm">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <Search className="h-4 w-4" />
      </span>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm shadow-sm transition placeholder:text-gray-400 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 focus:outline-none"
      />
    </div>
  );
}

export default SearchInput;
