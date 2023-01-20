import Btn from "../Btn";
import Card from "../Card";
import { useState } from "react";
const menus = [
  { name: "All", category: "ALL" },
  { name: "UI Design", category: "UI", class: "" },
  { name: "UX Design", category: "UX", class: "" },
  { name: "Developer Design", category: "DEV", class: "" },
  { name: "Articles", category: "1", class: "" },
  { name: "Tutorials", category: "2", class: "" },
  { name: "News", category: "3", class: "" },
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
    category: "DEV",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content2.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "DEV",
    title: "This way is wrong about UX Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content1.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "DEV",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content2.png",
    date: "NOV 23 2020",
    link: "#",
  },
];

const Content = () => {
  const [display, setDisplay] = useState(blogs);
  const [act, setAct] = useState("ALL");

  const check = (cat) => {
    setAct(cat);
    const filtered = blogs.filter((item) => item.category === cat);
    if (cat === "ALL") {
      setDisplay(blogs);
    } else {
      setDisplay(filtered);
    }
  };

  return (
    <div className="container">
      <div className="content-menu">
        {menus.map((menu) => {
          return <Btn menu={menu} check={check} activeText={act} />;
        })}
      </div>
      <div className="grid">
        {display.map((blog) => {
          return <Card card={blog} />;
        })}
      </div>
    </div>
  );
};

export default Content;
