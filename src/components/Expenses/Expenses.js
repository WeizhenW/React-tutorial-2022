import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [yearSelected, setYear] = useState("2019");

  const selectYearHandler = (year) => {
    console.log("in Expenses component", year);
    setYear(year);
    console.log("from state", yearSelected);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectNewYear={selectYearHandler}
        yearSelected={yearSelected}
      />
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
