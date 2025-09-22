import SearchBar from "../components/SearchBar";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  return (
    <div>
      <h1>Unsplash Image Search</h1>
      <SearchBar />
      <ImageGrid />
    </div>
  );
}
