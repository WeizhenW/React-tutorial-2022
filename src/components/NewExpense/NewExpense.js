import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import ShowExpenseForm from "./ShowExpenseForm";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseFormValue] = useState(true);
  const saveNewExpenseHandler = (newExpense) => {
    props.onAddNewExpense({
      ...newExpense,
      id: Math.random() * 1000000,
    });
  };
  const toggleExpenseForm = (showForm) => {
    setShowExpenseFormValue(showForm);
  }
  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm onSaveExpense={saveNewExpenseHandler} onToggleExpenseForm={toggleExpenseForm}/>
      ) : (
        <ShowExpenseForm onToggleExpenseForm={toggleExpenseForm}/>
      )}
    </div>
  );
};

export default NewExpense;
