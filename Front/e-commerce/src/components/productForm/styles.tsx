import { backgroundColor, mainColor } from "../generics/generalStyles";

export const formContainer = {
  backgroundColor: backgroundColor,
  width: "100%",
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 0",
};

export const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: "#FFF",
  borderRadius: "10px",
  padding: "0.5rem 0",
  width: "40%",
};

export const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "0.2rem",
  padding: "1rem 3rem",
  width: "100%",
};

export const labelStyle = {
  color: mainColor,
  fontSize: "1.4rem",
  fontWeight: "500",
  marginBottom: "5px",
};

export const inputStyle = {
  color: "#49697C",
  fontSize: "1.2rem",
  fontWeight: "400",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "solid 2px #8DDBD0",
  outline: "none",
  width: "100%",
  paddingBottom: "4px",
};

export const errorStyle = {
  marginTop: "2px",
  fontSize: "1.1rem",
  color: "#f50057",
};

export const listStyle = {
  color: mainColor,
  fontSize: "1.1rem",
  padding: "0rem 1rem",
  width: "100%",
};

export const listItemStyle = {
  borderBottom: `solid 2px #8DDBD0`,
  marginBottom: "5px",
  paddingBottom: "2px",
};

export const checkboxContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "0.2rem",
  padding: "1rem 3rem",
  width: "100%",
};
