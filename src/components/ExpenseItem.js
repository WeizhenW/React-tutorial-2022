import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.expense.date.toLocaleString("en-US", { month: "long" });
  const date = props.expense.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expense.date.getFullYear();
  const expenseDate = { month, year, date };
  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
