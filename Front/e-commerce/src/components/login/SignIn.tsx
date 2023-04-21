import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";

const labelFormStyle = {
  color: "#8DDBD0",
  fontSize: "1.8rem",
  fontWeight: "500",
  marginBottom: "5px",
};

const inputFormStyle = {
  color: "#BDFFF6",
  fontSize: "1.4rem",
  fontWeight: "400",
  backgroundColor: "#29495C",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "solid 2px #8DDBD0",
  outline: "none",
  width: "100%",
  paddingBottom: "4px",
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Box sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <label
            style={{
              color: "#8DDBD0",
              fontSize: "2.2rem",
              fontWeight: "500",
              marginBottom: "5px",
            }}
            data-testid="signIn-component"
          >
            Sign In
          </label>
        </Box>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            height: "80%",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <label style={labelFormStyle}>E-mail</label>
            <input
              style={inputFormStyle}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "white" }}>This field is required</span>
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <label style={labelFormStyle}>Password</label>
            <input
              style={inputFormStyle}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span style={{ color: "white" }}>This field is required</span>
            )}
          </Box>
          <Button
            type="submit"
            sx={{
              marginTop: "10px",
              color: "#BDFFF6",
              backgroundColor: "#8DDBD0",
              fontSize: "1.6rem",
              alignSelf: "center",
              ":hover": { bgcolor: "#BDFFF6", color: "#29495C" },
            }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </>
  );
}
