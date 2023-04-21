import { Box, Switch } from "@mui/material";
import { useState } from "react";
import LoginPanel from "../components/login/LoginPanel";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/login/SignUp";

export default function Login() {
  const [isSignUpActive, setIsLoginActive] = useState(false);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: "auto",
        height: "100vh",
      }}
    >
      <LoginPanel />
      <Box
        sx={{
          backgroundColor: "#29495C",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5% 10%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              color: "#BDFFF6",
              fontWeight: "600",
              fontSize: "1.4rem",
              alignSelf: "flex-end",
            }}
          >
            {isSignUpActive ? " Change to sign In" : "Change to sign Up"}
          </p>
          <Switch
            sx={{ alignSelf: "flex-end", marginRight: "10%" }}
            checked={isSignUpActive}
            onChange={() => setIsLoginActive((prev) => !prev)}
            data-testid="login-switch"
          />
        </Box>

        {isSignUpActive ? <SignUp /> : <SignIn />}
      </Box>
    </Box>
  );
}
