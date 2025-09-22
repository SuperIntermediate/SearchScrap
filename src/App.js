import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { ImageContext } from "./context/ImageContext";
import useFetchImages from "./hooks/useFetchImages";
import "./index.css";

export default function App() {
  const { images, loading, error } = useContext(ImageContext);
  const { fetchImages } = useFetchImages();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) fetchImages(query);
  };

  return (
    <div className="app-background">
      {/* Frosted Glass Panel */}
      <div className="glass-panel">
        <header>
          <h1>🌿 SearchScrap</h1>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              placeholder="Search images..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </header>

        {error && <p className="error">⚠️ {error}</p>}

        <motion.div className="image-grid">
          <AnimatePresence>
            {loading
              ? Array.from({ length: 12 }).map((_, i) => (
                  <motion.div key={i} className="skeleton" />
                ))
              : images.map((img) => (
                  <motion.a
                    key={img.id}
                    href={img.urls.full}
                    target="_blank"
                    rel="noreferrer"
                    className="image-card"
                  >
                    <img
                      src={img.urls.small}
                      alt={img.alt_description || "Unsplash"}
                    />
                  </motion.a>
                ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
