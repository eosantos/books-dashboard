import React from "react";
//import { Button } from "@material-ui/core";
import "./index.scss";
import CardBook from "../../components/CardBook";
import { books } from "../../types/books";
import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";

// interface IProps {
//   handleChange: () => void;
// }

// export const Books = ({ handleChange }: IProps) => {
//   const [loading, setLoading] = React.useState<boolean>(false);
//   useEffect(() => {
//     console.log("useEffect");
//   }, []);

export const Books = () => {
  return (
    <Container className="Page">
      <Box mb={2}>
        <Typography variant="h3" color="secondary" align="center">
          Top 10 Edu Books
        </Typography>
      </Box>
      <Box className="Books">
        {books && books.map((book) => <CardBook book={book} />)}
      </Box>
    </Container>
  );
};

export default Books;
