import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div className="expenses">
      <ul>
        {props.expenses.map((expense) => {
          return (
            <li key={expense.id}>
              <ExpenseItem expense={expense} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Expenses;
