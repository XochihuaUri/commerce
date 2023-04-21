import { Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import { useForm } from "react-hook-form";

interface dataFormProps {
  setEditing: (fun: (prev: boolean) => void) => void;
}

export default function ({ setEditing }: dataFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "flex-end",
              borderBottom: "2px solid #eee",
            }}
          >
            <p style={{ fontSize: "2rem", fontWeight: "200", color: "#666" }}>
              User
            </p>
            <input
              placeholder="Username"
              {...register("user", { required: true })}
              style={{
                fontSize: "1.8rem",
                fontWeight: "200",
                color: "#444",
                cursor: "text",
                justifySelf: "center",
                outline: "none",
                border: "1px solid #8DDBD0",
                borderRadius: "6px",
                textAlign: "end",
              }}
            />
          </Box>

          {errors.user && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 25px",
                alignItems: "flex-end",
                borderBottom: "2px solid #eee",
                fontSize: "1.2rem",
                color: "red",
              }}
            >
              <span>This field is required</span>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "flex-end",
              borderBottom: "2px solid #eee",
            }}
          >
            <p style={{ fontSize: "2rem", fontWeight: "200", color: "#666" }}>
              E-mail
            </p>
            <input
              placeholder="e-mail"
              type="email"
              {...register("eMail", { required: true })}
              style={{
                fontSize: "1.8rem",
                fontWeight: "200",
                color: "#444",
                cursor: "text",
                justifySelf: "center",
                outline: "none",
                border: "1px solid #8DDBD0",
                borderRadius: "6px",
                textAlign: "end",
              }}
            />
          </Box>

          {errors.eMail && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 25px",
                alignItems: "flex-end",
                borderBottom: "2px solid #eee",
                fontSize: "1.2rem",
                color: "red",
              }}
            >
              <span>This field is required</span>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "flex-end",
              borderBottom: "2px solid #eee",
            }}
          >
            <p style={{ fontSize: "2rem", fontWeight: "200", color: "#666" }}>
              Password
            </p>
            <input
              placeholder="******"
              type="password"
              {...register("password", { required: true })}
              style={{
                fontSize: "1.8rem",
                fontWeight: "200",
                color: "#444",
                cursor: "text",
                justifySelf: "center",
                outline: "none",
                border: "1px solid #8DDBD0",
                borderRadius: "6px",
                textAlign: "end",
              }}
            />
          </Box>

          {errors.password && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 25px",
                alignItems: "flex-end",
                borderBottom: "2px solid #eee",
                fontSize: "1.2rem",
                color: "red",
              }}
            >
              <span>This field is required</span>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px",
              alignItems: "flex-end",
              borderBottom: "2px solid #eee",
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{
                marginRight: "10px",
              }}
              size="large"
              endIcon={<ClearIcon />}
              onClick={() => setEditing((prev) => !prev)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#29495C",
                ":hover": {
                  bgcolor: "#8DDBD0",
                  color: "#29495C",
                },
              }}
              size="large"
              endIcon={<SaveIcon />}
              type="submit"
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
