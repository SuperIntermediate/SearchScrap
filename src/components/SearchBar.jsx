import { useState } from "react";
import useFetchImages from "../hooks/useFetchImages";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { fetchImages } = useFetchImages();

  const handleSearch = () => {
    if (query.trim()) {
      fetchImages(query);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
