import { Box } from "@mui/material";
import Navbar from "../components/generics/Navbar";
import ImageProfile from "../components/profile/ImageProfile";
import PersonalData from "../components/profile/PersonalData";
import { backgroundColor } from "../components/generics/generalStyles";

export default function Profile() {
  return (
    <>
      <Box sx={{ height: "100%", boxSizing: "border-box" }}>
        <Navbar />
        <Box
          sx={{
            boxSizing: "border-box",
            backgroundColor: backgroundColor,
            padding: "10% 0",
          }}
        >
          <ImageProfile />
          <PersonalData eMail="email hardcoded" user="User name here" />
        </Box>
      </Box>
    </>
  );
}
