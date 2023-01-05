let menus = [
  { name: "PORTFOLIO" },
  { name: "BLOG" },
  { name: "CV" },
  { name: "STORE" },
  { name: "FREELANCE" },
  { name: "ABOUT ME" },
  { name: "CONTACT" },
];
const Menu = (props) => {
  return (
    <a className="menu-hover" href="#">
      {props.name}
    </a>
  );
};
const Navbar = () => {
  return (
    <div className="flex container">
      <div className="center">
        <img src="/images/sadZeppelins.png" alt="logo" />
        <img style={{ height: "25px" }} src="/images/hireMe.png" alt="logo" />
      </div>
      <div className="center">
        {menus.map((menu) => {
          return (
            <div className="margin1">
              <Menu name={menu.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
