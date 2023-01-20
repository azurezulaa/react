import "./cardList.css";
import CardItem from "./Card";
const CardList = (props) => {
  return (
    <div className="row">
      {props.users.map((user) => (
        <CardItem user={user} />
      ))}
    </div>
  );
};

export default CardList;
