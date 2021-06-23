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
}

export default function RecipeReviewCard({ book }: IProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const defaultProps = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
  };

  // interface ICardBookProps {
  //   title: string;
  //   // date: date;
  //   avatarLink: string;
  //   useEllipssummary: string;
  // }

  // const CardBook: React.FC<ICardBookProps> = ({
  //   title,
  //   // date,
  //   avatarLink,
  //   useEllipssummary,
  // }) => {
  return (
    <Box p={2} m={2} borderRadius={16} {...defaultProps}>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={book.title}
          subheader={book.publishedAt.toString()}
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
