import { Box, Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import {
  arrowsContainer,
  cardContainer,
  imagesContainer,
  productPrice,
  productTitle,
} from "./style";
import { useNavigate } from "react-router-dom";

type ProductProps = {
  name: string;
  price: number;
  images: string[];
  id: string;
};

export default function ProductCard({ name, price, images, id }: ProductProps) {
  const navigate = useNavigate();
  const [arrows, setArrows] = useState<boolean>(false);
  const [arrowBtnActive, setArrowBtnActive] = useState<boolean>(false);
  const [imgIndex, setImgIndex] = useState<number>(0);

  const handleBackArrow = () => {
    if (imgIndex < 1) {
      setImgIndex(images.length - 1);
      return;
    }
    setImgIndex((prev) => prev - 1);
  };

  const handleForwardArrow = () => {
    if (imgIndex >= images.length - 1) {
      setImgIndex(0);
      return;
    }
    setImgIndex((prev) => prev + 1);
  };

  const handleClick = (active: boolean) => {
    if (!active) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <Box
      sx={cardContainer}
      onMouseEnter={() => setArrows(true)}
      onMouseLeave={() => setArrows(false)}
      onClick={() => handleClick(arrowBtnActive)}
    >
      <div style={imagesContainer(images, imgIndex)}>
        {arrows && images.length > 1 && (
          <Box sx={arrowsContainer}>
            <IconButton
              sx={{ zIndex: "2" }}
              color="primary"
              onClick={handleBackArrow}
              onMouseEnter={() => setArrowBtnActive(true)}
              onMouseLeave={() => setArrowBtnActive(false)}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={handleForwardArrow}
              onMouseEnter={() => setArrowBtnActive(true)}
              onMouseLeave={() => setArrowBtnActive(false)}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        )}
      </div>
      <p style={productTitle}>{name}</p>
      <p style={productPrice}>{`$ ${price}`}</p>
    </Box>
  );
}
