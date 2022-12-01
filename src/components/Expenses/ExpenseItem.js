import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, updateTitle] = useState(props.expense.title);
  const clickHandler = () => {
    updateTitle("new title!!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
        <button onClick={clickHandler}>Change Name</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
