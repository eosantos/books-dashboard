import React from "react";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import { Box, Typography } from "@material-ui/core";

function ErrorToLoad() {
  return (
    <Box>
      <ReportProblemOutlinedIcon />
      <Typography>Page not found</Typography>
    </Box>
  );
}

export default ErrorToLoad;
