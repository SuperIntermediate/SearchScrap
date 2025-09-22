import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default function useFetchImages() {
  const { setImages, setLoading, setError } = useContext(ImageContext);

  const fetchImages = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      // ✅ Convert API response to JSON
      const data = await response.json();

      // ✅ Debug log to confirm format
      console.log("API JSON Response:", JSON.stringify(data, null, 2));

      setImages(data.results);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { fetchImages };
}
