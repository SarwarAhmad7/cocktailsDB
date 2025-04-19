import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: ".5rem",
        marginTop: "10rem",
      }}
    >
      <CircularProgress />
      <h3>Loading...</h3>
    </Box>
  );
};

export default Loading;
