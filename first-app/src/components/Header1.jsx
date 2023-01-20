import React from "react";
import Navbar from "./Header/Navbar";

const Header1 = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="container">
        <img
          src="./images/content2.png"
          alt=""
          style={{ width: "100%", marginTop: "50px" }}
        />
      </div>
    </div>
  );
};

export default Header1;
