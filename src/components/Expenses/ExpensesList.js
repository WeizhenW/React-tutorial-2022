import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul>
      {props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === props.yearSelected;
      }).length > 0 ? (
        props.expenses
          .filter((expense) => {
            return expense.date.getFullYear().toString() === props.yearSelected;
          })
          .map((expense) => {
            return (
              <li key={expense.id}>
                <ExpenseItem expense={expense} />
              </li>
            );
          })
      ) : (
        <p className="expenses-list__fallback">No expenses were found! </p>
      )}
    </ul>
  );
};

export default ExpensesList;
