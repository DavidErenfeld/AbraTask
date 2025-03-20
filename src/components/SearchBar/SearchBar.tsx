import "./SearchBar.css";

interface SearchBarProps {
  query: string;
  onSearchChange: (query: string) => void;
}
const SearchBar = ({ query, onSearchChange }: SearchBarProps) => {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search Pet..."
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </section>
  );
};
export default SearchBar;
