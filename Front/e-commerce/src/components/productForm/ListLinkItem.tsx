import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

type linkProp = {
  link: string;
  id: number;
  deleteFn: (id: number) => void;
};

export default function ListLinkItem({ link, id, deleteFn }: linkProp) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `solid 2px #8DDBD0`,
        margin: "5px 0",
        paddingBottom: "2px",
      }}
    >
      <li key={id}>{link}</li>

      <IconButton color="error" onClick={() => deleteFn(id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
