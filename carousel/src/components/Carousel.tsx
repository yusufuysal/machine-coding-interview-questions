import { useState } from "react";

type Image = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Carousel = ({ images }: { images: Image[] }) => {
  const [activeImage, setActiveImage] = useState<Image>(images[0]);

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

    setActiveImage(images[nextIndex]);
  };

  return (
    <article>
      <button onClick={() => handleChangeImage(activeImage, -1)}>
        Previous
      </button>
      <img src={activeImage?.url} />

      <button onClick={() => handleChangeImage(activeImage, +1)}>Next</button>
    </article>
  );
};

export default Carousel;
