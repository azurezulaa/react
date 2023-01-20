import { useState } from "react";

const Btn = ({ menu, check, activeText }) => {
  return (
    <button
      onClick={() => {
        check(menu.category);
      }}
      className={menu.category === activeText ? "pink font18" : "font18"}
    >
      {menu.name}
    </button>
  );
};
export default Btn;
