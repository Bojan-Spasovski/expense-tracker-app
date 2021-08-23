import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(`2021`);

  const saveSelectedYear = (enteredSelectedYear) => {
    setFilteredYear(enteredSelectedYear);
  };

  // using .filter method with passed fucntion (expense =>{}) to check true or false
  //  and return it as a string. And then filteredExpenses is mapped and rendered.
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //props.item = All Expenses
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveSelectedYear={saveSelectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
