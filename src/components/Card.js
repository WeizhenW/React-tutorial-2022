import "./Card.css";

function Card(props) {
  const newClasses = "card " + props.className;
  return <div className={newClasses}>{props.children}</div>;
}

export default Card;
