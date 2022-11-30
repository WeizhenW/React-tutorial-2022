import "./ExpenseDate.css";

function ExpenseDate(props) {
  return (
    <div className="expense-date ">
      <div className="expense-date__month">{props.expenseDate.month}</div>
      <div className="expense-date__year">{props.expenseDate.year}</div>
      <div className="expense-date__day">{props.expenseDate.date}</div>
    </div>
  );
}

export default ExpenseDate;
