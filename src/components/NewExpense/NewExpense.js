import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewExpenseHandler = (newExpense) => {
    props.onAddNewExpense({
      ...newExpense,
      id: Math.random() * 1000000,
    });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
