const socials = [
  { name: "TWITTER", icon: "/images/twitter.png", link: "" },
  { name: "LINKEDIN", icon: "/images/linked_in.png", link: "" },
  { name: "MEDIUM", icon: "/images/medium.png", link: "" },
];
const SocialBtn = ({ button }) => {
  return (
    <button className={button.name}>
      <img style={{ marginRight: "5px" }} src={button.icon} alt="" />
      {button.name}
    </button>
  );
};
const Herosection = () => {
  return (
    <div className="flex">
      <div style={{ width: "45%" }}>
        <h1 className="pink bold font42">Blog Posts</h1>
        <p className="font36">I think so, this is it</p>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="flex text-white">
          {socials.map((social) => {
            return <SocialBtn button={social} />;
          })}
        </div>
      </div>
      <img src="/images/hero-image.png" alt="" />
    </div>
  );
};

export default Herosection;
