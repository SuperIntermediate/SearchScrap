import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ImageProvider } from "./context/ImageContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ImageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ImageProvider>
  );
}
