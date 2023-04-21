import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DataRow from "./DataRow";
import { Data } from "./PersonalData";

interface dataTableProps {
  dataArray: Data[];
  setEditing: (fun: (prev: boolean) => void) => void;
}

export default function DataTable({ dataArray, setEditing }: dataTableProps) {
  return (
    <>
      {dataArray.map((element, id) => (
        <DataRow data={element.data} value={element.value} />
      ))}
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
          sx={{
            backgroundColor: "#29495C",
            ":hover": {
              bgcolor: "#8DDBD0",
              color: "#29495C",
            },
          }}
          size="large"
          endIcon={<EditIcon />}
          onClick={() => setEditing((prev) => !prev)}
        >
          Edit
        </Button>
      </Box>
    </>
  );
}
