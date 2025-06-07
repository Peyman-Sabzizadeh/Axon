type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};
function SearchInput({ searchTerm, setSearchTerm }: Props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
export default SearchInput;
