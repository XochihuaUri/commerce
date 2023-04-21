import {
  backgroundColor,
  mainColor,
  secondaryColor,
} from "../generics/generalStyles";

export const productContainerStyle = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  padding: "1rem",
  backgroundColor: "#FFF",
  minHeight: "80vh",
  borderRadius: "5px",
};

export const productImagesContainerStyle = {
  display: "flex",
  gridColumn: "1/4",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

export const principalImgContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const principalImageStyle = (
  images: string[] | undefined,
  imageIndex: number
) => {
  if (images === undefined) {
    return;
  }
  return {
    height: "400px",
    width: "700px",
    backgroundImage: `url(${images[imageIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginRight: "10px",
  };
};

export const productInfoStyle = {
  display: "flex",
  gridColumn: "4/5",
  flexDirection: "column",
  padding: "20px 15px",
  border: `solid 1px ${backgroundColor}`,
  borderRadius: "6px",
  marginLeft: "5px",
};

export const productNameStyle = {
  color: mainColor,
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "20px",
};

export const priceStyle = {
  color: secondaryColor,
  fontSize: "1.8rem",
  fontWeight: "500",
  marginBottom: "10px",
};

export const descriptionStyle = {
  color: secondaryColor,
  fontSize: "1.3rem",
  fontWeight: "500",
  textAlign: "justify",
  marginBottom: "20px",
};

export const stockContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
};

export const stockStyle = {
  color: secondaryColor,
  fontSize: "1.8rem",
  fontWeight: "600",
};

export const checkIconStyle = {
  color: mainColor,
  height: "30px",
  width: "30px",
};

export const clearIconStyle = {
  color: "#ef5350",
  height: "30px",
  width: "30px",
};
