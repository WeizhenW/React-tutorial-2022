import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
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
      <ExpensesList expenses={props.expenses} yearSelected={yearSelected}/>
    </Card>
  );
};

export default Expenses;
