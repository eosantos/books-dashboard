import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Book } from "../../types/books";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
  })
);

interface IProps {
  book: Book;
  listBooks: Book[];
  setListBooks: any;
}

export default function CardBook({ book, listBooks, setListBooks }: IProps) {
  const classes = useStyles();

  const defaultProps = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
  };

  function deleteCard() {
    setListBooks(listBooks.filter((b: Book) => b.id !== book.id));
    console.log(book);
  }

  return (
    <Box p={2} m={2} borderRadius={16} {...defaultProps}>
      <Card className={classes.root}>
        <CardHeader
          title={book.title}
          subheader={book.publishedAt.toString()}
          action={
            <IconButton aria-label="settings" onClick={deleteCard}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Box>
          <img height="300px" src={book.avatarLink} alt="book cover" />
        </Box>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.summary}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
