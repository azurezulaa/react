import Btn from "../Btn";
import Card from "../Card";
const menus = [
  "All",
  "UI Design",
  "UX Design",
  "Product Design",
  "Articles",
  "Tutorials",
  "News",
];
const blogs = [
  {
    category: "UI",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content1.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "UX",
    title: "This way is wrong about UX Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content2.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "UI",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content1.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "UI",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content2.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "UX",
    title: "This way is wrong about UX Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content1.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "UI",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content2.png",
    date: "NOV 23 2020",
    link: "#",
  },
];

const Content = () => {
  return (
    <div className="container">
      <div className="content-menu">
        {menus.map((menu) => {
          return <Btn btn={menu} />;
        })}
      </div>
      <div className="grid">
        {blogs.map((blog) => {
          return <Card card={blog} />;
        })}
      </div>
    </div>
  );
};

export default Content;
