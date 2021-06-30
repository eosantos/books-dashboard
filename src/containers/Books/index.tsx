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
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

const Books = () => {
  const [loading, setLoading] = useState(true);
  const [cardBook, setCardBook] = useState(false);
  const [errorToLoad, setErrorToLoad] = useState(false);
  const [listBooks, setListBooks] = useState(books);
  const histo = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setCardBook(true);
      setErrorToLoad(false);
    }, 1000);
  });

  return (
    <Container className="Page">
      <Box mb={2}>
        <Typography variant="h3" color="secondary" align="center">
          Top 10 Edu Books =)
        </Typography>
      </Box>
      <Box textAlign="center" p={2}>
        <Fab
          color="secondary"
          aria-label="add"
          onClick={() => histo.push("/cadastro")}
        >
          <AddIcon />
        </Fab>
      </Box>
      <Box className="Books">
        {loading ? <Loading /> : null}
        {cardBook &&
          listBooks &&
          listBooks.map((book) => (
            <CardBook
              book={book}
              listBooks={listBooks}
              setListBooks={setListBooks}
              key={book.id}
            />
          ))}
        {errorToLoad && <ErrorToLoad />}
      </Box>
    </Container>
  );
};

export default Books;
