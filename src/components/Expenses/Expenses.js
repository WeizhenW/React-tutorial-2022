import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [yearSelected, setYear] = useState("2022");

  const selectYearHandler = (year) => {
    setYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectNewYear={selectYearHandler}
        yearSelected={yearSelected}
      />
      <ul>
        {props.expenses
          .filter((expense) => {
            return expense.date.getFullYear().toString() === yearSelected;
          })
          .map((expense) => {
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
