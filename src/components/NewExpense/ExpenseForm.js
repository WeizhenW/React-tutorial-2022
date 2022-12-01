import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //state
  const [expenseInput, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        date: new Date(event.target.value),
      };
    });
  };

  const cancelFormHandler = () => {
    props.onToggleExpenseForm(false);
  };

  const formSubmitHandler = (event) => {
    //prevent send to hosting sever and reload page
    event.preventDefault();
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
    props.onSaveExpense(expenseInput);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseInput.title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={expenseInput.amount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={expenseInput.date}
            onChange={dateChangeHandler}
            type="date"
            min="2021-01-01"
            max="2023-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelFormHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
