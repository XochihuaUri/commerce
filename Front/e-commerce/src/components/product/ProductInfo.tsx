import {
  checkIconStyle,
  clearIconStyle,
  descriptionStyle,
  priceStyle,
  productInfoStyle,
  productNameStyle,
  stockContainerStyle,
  stockStyle,
} from "./style";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

type productInfoType = {
  name: string;
  price: number;
  description: string;
  stock: boolean;
};

export default function ProductInfo({
  name,
  price,
  description,
  stock,
}: productInfoType) {
  return (
    <>
      <div style={productInfoStyle}>
        <div style={productNameStyle}>{name}</div>
        <div style={priceStyle}>$ {price}</div>

        <div style={descriptionStyle}>{description}</div>

        <div style={stockContainerStyle}>
          <div style={stockStyle}>{stock ? "Available" : "Unavailable"}</div>
          {stock ? (
            <CheckIcon sx={checkIconStyle} />
          ) : (
            <ClearIcon sx={clearIconStyle} />
          )}
        </div>
      </div>
    </>
  );
}
