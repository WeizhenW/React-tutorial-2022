const ShowExpenseForm = (props) => {
  const toggleShowExpenseFormHandler = () => {
    props.onToggleExpenseForm(true);
  };
  return (
    <div>
      <button onClick={toggleShowExpenseFormHandler}>Add New Expense</button>
    </div>
  );
};
export default ShowExpenseForm;
