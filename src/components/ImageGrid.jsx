import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

export default function ImageGrid() {
  const { images, loading, error } = useContext(ImageContext);

  if (loading) {
    return (
      <div className="image-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="skeleton"></div>
        ))}
      </div>
    );
  }

  if (error) return <p>Error loading images.</p>;
  if (images.length === 0) return <p>No images found.</p>;

  return (
    <div className="image-grid">
      {images.map((img) => (
        <a
          key={img.id}
          href={img.urls.full} // high-res link
          target="_blank"
          rel="noreferrer"
        >
          <img
          src={img.urls.small}
          alt={img.alt_description || "Unsplash image"}
          style={{ animation: "fadeIn 0.8s ease-in-out" }}
        />
        </a>
      ))}
    </div>
  );
}
