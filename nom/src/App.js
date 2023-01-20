import logo from "./logo.svg";
import "./App.css";
import { books } from "./data";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./BookDetail";
import Home from "./Home";
import BookList from "./BookList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList books={books} />} />
      <Route path="/books/:name" element={<BookDetail books={books} />} />
    </Routes>
  );
}

export default App;
