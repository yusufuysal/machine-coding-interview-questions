import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";

type Image = {
  id: number;
  download_url: string;
};

const Carousel = ({
  images,
  isLoading,
}: {
  images: Image[];
  isLoading: boolean;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  console.log(images[currentImageIndex]?.download_url);

  const handleChangeImage = (currentImage: Image, direction: number) => {
    const currentIndex = images.findIndex(
      (image) => image.id === currentImage.id
    );
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
      nextIndex = images.length - 1;
    } else if (nextIndex === images.length) {
      nextIndex = 0;
    }

    setCurrentImageIndex(nextIndex);
  };

  if (isLoading) {
    return <p> Loading... </p>;
  }

  return (
    <section className="carousel-container">
      <img
        className="carousel-img"
        src={images[currentImageIndex]?.download_url}
      />
      <button
        className="carousel-btn prev-btn"
        onClick={() => handleChangeImage(images[currentImageIndex], -1)}
      >
        <ArrowBigLeft />
      </button>

      <button
        className="carousel-btn next-btn"
        onClick={() => handleChangeImage(images[currentImageIndex], +1)}
      >
        <ArrowBigRight />
      </button>
    </section>
  );
};

export default Carousel;
