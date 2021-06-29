import React from "react";
import "./index.scss";
import CardBook from "../../components/CardBook";
import { books } from "../../types/books";
import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { IsLoading } from "../../components/IsLoading";
import { ErrorToLoad } from "../../components/ErrorToLoad";

const Books = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setCardBook(true);
      setErrorToLoad(false);
    }, 6000);
  });

  return (
    <Container className="Page">
      <Box mb={2}>
        <Typography variant="h3" color="secondary" align="center">
          Top 10 Edu Books
        </Typography>
      </Box>
      <Box className="Books">
        {loading : <IsLoading> : null}
        {CardBook {books && books.map((book) => <CardBook book={book} key={book.id} />)}
        {ErrorToLoad && <ErrorToLoad /> }
      </Box>
    </Container>
  );
};

export default Books;
