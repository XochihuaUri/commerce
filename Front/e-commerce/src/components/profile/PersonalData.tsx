import { Box } from "@mui/material";
import { useState } from "react";
import DataForm from "./DataForm";
import DataTable from "./DataTable";

interface PersonalDataInterface {
  eMail: string;
  user: string;
}
export interface Data {
  data: string;
  value: string;
}

export default function PersonalData({ eMail, user }: PersonalDataInterface) {
  const [editing, setEditing] = useState(false);

  const data: Data[] = [
    { data: "User", value: "User hardcoded" },
    { data: "E-mail", value: "email hardcoded" },
    { data: "Password", value: "*******" },
  ];
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            backgroundColor: "#FFF",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            padding: "0 10px",
          }}
        >
          {editing ? (
            <DataForm setEditing={() => setEditing((prev) => !prev)} />
          ) : (
            <DataTable
              dataArray={data}
              setEditing={() => setEditing((prev) => !prev)}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
