import logo from "./logo.svg";
import "./App.css";
import { datas } from "./data";
import CardList from "./components/cardList";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState(datas);
  const changeText = (e) => {
    const filtered = datas.filter((user) =>
      user.first.toLowerCase().includes(e.target.value)
    );
    setUserList(filtered);
  };

  return (
    <div className="container">
      <h1>User list</h1>
      <Search a={changeText} />
      <CardList users={userList} />
    </div>
  );
}

export default App;
