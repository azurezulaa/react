const menus = [
  "All",
  "UI Design",
  "UX Design",
  "Product Design",
  "Articles",
  "Tutorials",
  "News",
];
const Menu = (props) => (
  <a className="content-tag" href="#">
    {props.btn}
  </a>
);

const Content = () => {
  return (
    <div className="container">
      <div>
        {menus.map((menu) => {
          return <Menu btn={menu} />;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Content;
