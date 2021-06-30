import React from "react";
import "./index.scss";
import { Container, Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Register = () => {
  return (
    <Container className="Page">
      <Box mb={2}>
        <Typography variant="h3" color="secondary" align="center">
          Top 10 Edu Books =)
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
