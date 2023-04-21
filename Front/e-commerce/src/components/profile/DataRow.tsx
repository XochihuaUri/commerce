import { Box } from "@mui/material";

interface dataProps {
  data: string;
  value: string;
}
export default function DataRow({ data, value }: dataProps) {
  return (
    <>
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
          {data}
        </p>
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "200",
            color: "#888",
            cursor: "text",
            justifySelf: "center",
          }}
        >
          {value}
        </p>
      </Box>
    </>
  );
}
