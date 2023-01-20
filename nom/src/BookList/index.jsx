import { Grid } from "@mui/material";
import * as React from "react";
import Book from "../component/Book";

const BookList = ({ books }) => {
  return (
    <div>
      <Grid container>
        {books.map((book, i) => (
          <Book book={book} id={i} />
        ))}
      </Grid>
    </div>
  );
};

export default BookList;
