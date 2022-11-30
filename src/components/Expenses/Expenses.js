import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ul>
        {props.expenses.map((expense) => {
          return (
            <li key={expense.id}>
              <ExpenseItem expense={expense} />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Expenses;
