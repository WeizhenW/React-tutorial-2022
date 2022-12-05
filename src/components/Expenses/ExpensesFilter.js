import React from "react";
import "./ExpensesFilter.css";
import Wrapper from "../Helper/Wrapper";

const ExpensesFilter = (props) => {
  const yearSelectHandler = (event) => {
    console.log(event.target.value);
    props.onSelectNewYear(event.target.value);
  };

  return (
    <Wrapper>
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.yearSelected} onChange={yearSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
    </Wrapper>
  );
};

export default ExpensesFilter;
