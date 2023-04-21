import { mainColor, secondaryColor } from "../generics/generalStyles";

export const cardContainer = {
  width: "230px",
  height: "300px",
  marginBottom: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  backgroundColor: "#FFF",
  borderRadius: "4px",
  border: "solid 1px #ccc",
  transitionDuration: "250ms",
  padding: "0",
  ":hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    cursor: "pointer",
    border: "none",
    height: "320px",
  },
};

export const imagesContainer = (images: string[], index: number) => {
  return {
    width: "100%",
    height: "65%",
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    alignSelf: "center",
    backgroundPosition: "center",
    borderBottom: "solid 1px #ccc",
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px",
  };
};

export const arrowsContainer = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const productTitle = {
  color: mainColor,
  fontSize: "1.5rem",
  padding: "0 10px",
};

export const productPrice = {
  color: secondaryColor,
  fontSize: "1.4rem",
  padding: "0 10px 10px",
};
