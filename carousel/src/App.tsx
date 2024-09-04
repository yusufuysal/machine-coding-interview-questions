import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const imagesData = await response.json();

      setImages(imagesData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <main className="main-wrapper">
      <Carousel images={images} isLoading={isLoading} />
    </main>
  );
}

export default App;
