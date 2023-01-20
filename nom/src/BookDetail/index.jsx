import { display } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

const BookDetail = ({ books }) => {
  const loc = useParams();
  const book = books[loc.name];
  return (
    <Box sx={{ width: "100%" }}>
      <img src={book.thumbnailUrl} alt="" />
      {book.title}
    </Box>
  );
};

export default BookDetail;
