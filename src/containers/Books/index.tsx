import React from "react";
//import { Button } from "@material-ui/core";
import "./index.css";
import CardBook from "../../components/CardBook";
import { books } from "../../types/books";

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
    <div className="Books">
      {books && books.map((book) => <CardBook book={book} />)}
    </div>
  );
};

export default Books;
