import React from "react";
import "./index.scss";
import CardBook from "../../components/CardBook";
import { books } from "../../types/books";
import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import ErrorToLoad from "../../components/ErrorToLoad";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/Loading";

const Books = () => {
  const [loading, setLoading] = useState(true);
  const [cardBook, setCardBook] = useState(false);
  const [errorToLoad, setErrorToLoad] = useState(false);

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
        {loading ? <Loading /> : null}
        {cardBook &&
          books &&
          books.map((book) => <CardBook book={book} key={book.id} />)}
        {errorToLoad && <ErrorToLoad />}
      </Box>
    </Container>
  );
};

export default Books;
