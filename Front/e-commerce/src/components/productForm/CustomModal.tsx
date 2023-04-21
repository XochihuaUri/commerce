import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  complementaryMainColor,
  mainColor,
  secondaryColor,
} from "../generics/generalStyles";
import { Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: "10px",
  backgroundColor: mainColor,
  color: complementaryMainColor,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

type CustomModalType = {
  open: boolean;
  handleClose: () => void;
  success: boolean;
};

export default function CustomModal({
  open,
  handleClose,
  success,
}: CustomModalType) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: "1.6rem", fontWeight: "600" }}
          >
            {success ? "Your product has been created" : "Something went wrong"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {success ? (
              <Button
                variant="contained"
                sx={{
                  margin: "10px 0",
                  backgroundColor: secondaryColor,
                  ":hover": {
                    bgcolor: "#8DDBD0",
                    color: "#29495C",
                  },
                }}
                size="large"
                type="submit"
                onClick={() => console.log("going home")}
              >
                Go home
              </Button>
            ) : (
              "There was a problem. Please try in a few time"
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
