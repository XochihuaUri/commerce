import { Box } from "@mui/material";
import LoginImg from "../../assets/PanelImg.png";

export default function LoginPanel() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "repeat(6, auto)",
        gridTemplateColumns: "auto",
        padding: "0",
        backgroundColor: "#8DDBD0",
        boxSizing: "border-box",
        height: "100%",
      }}
    >
      <Box
        sx={{
          gridRowStart: 1,
          gridRowEnd: 2,
          color: "#BDFFF6",
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Free commerce web
      </Box>
      <Box
        sx={{
          gridRowStart: 2,
          gridRowEnd: 3,
          color: "#BDFFF6",
          fontSize: "2rem",
          fontWeight: "500",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        Publish your own products
      </Box>
      <Box
        sx={{
          gridRowStart: 3,
          gridRowEnd: 6,
          color: "#BDFFF6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={LoginImg}
          alt="boxes"
          style={{ height: "90%", width: "70%", color: "#BDFFF6" }}
          data-testid="login-img"
        />
      </Box>
    </Box>
  );
}
