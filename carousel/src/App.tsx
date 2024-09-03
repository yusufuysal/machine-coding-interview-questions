import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(images);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      console.log(response);
      const imagesData = await response.json();
      console.log(imagesData);

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
    <main>{isLoading ? <p>Loading...</p> : <Carousel images={images} />}</main>
  );
}

export default App;
