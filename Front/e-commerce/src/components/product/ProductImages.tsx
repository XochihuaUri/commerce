import MiniImage from "./MiniImage";
import { product } from "./ProductContainer";
import {
  principalImageStyle,
  principalImgContainer,
  productImagesContainerStyle,
} from "./style";
import { useState } from "react";

type productImagesProps = {
  images: string[];
};

export default function ProductImages({ images }: productImagesProps) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const handleActive = (index: number) => {
    setImageIndex(index);
  };

  return (
    <>
      <div style={productImagesContainerStyle}>
        <div>
          {images.map((img, index) => {
            return (
              <MiniImage
                imageUrl={img}
                id={index}
                handleActive={handleActive}
                key={img}
              />
            );
          })}
        </div>
        <div style={principalImgContainer}>
          <div style={principalImageStyle(images, imageIndex)} />
        </div>
      </div>
    </>
  );
}
