import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// DUMMY_EXPENSES token existing expenses array to which to add to NewExpenses data.
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Tinex",
    amount: 78,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car Registration",
    amount: 200,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Netfix Subscription",
    amount: 12,
    date: new Date(2021, 4, 5),
  },
  {
    id: "e4",
    title: "Vacation",
    amount: 800,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Car Repair",
    amount: 150,
    date: new Date(2021, 2, 8),
  },
  {
    id: "e6",
    title: "Shopping",
    amount: 80,
    date: new Date(2021, 3, 7),
  },
  {
    id: "e7",
    title: "Software",
    amount: 112,
    date: new Date(2021, 6, 19),
  },
  {
    id: "e8",
    title: "Present",
    amount: 90,
    date: new Date(2020, 6, 19),
  },
  {
    id: "e9",
    title: "Groceries",
    amount: 30,
    date: new Date(2020, 6, 19),
  },
  {
    id: "e10",
    title: "Weekend",
    amount: 55,
    date: new Date(2020, 3, 12),
  },
  {
    id: "e11",
    title: "Software",
    amount: 65,
    date: new Date(2020, 9, 7),
  },
  {
    id: "e12",
    title: "Drone parts",
    amount: 250,
    date: new Date(2020, 4, 4),
  },
  {
    id: "e13",
    title: "Dog food",
    amount: 12,
    date: new Date(2020, 2, 19),
  },
  {
    id: "e14",
    title: "Dog present",
    amount: 20,
    date: new Date(2020, 2, 29),
  },
  {
    id: "e15",
    title: "Weekend gathering",
    amount: 45,
    date: new Date(2020, 5, 23),
  },
  {
    id: "e16",
    title: "Home supllies",
    amount: 90,
    date: new Date(2020, 5, 3),
  },
  {
    id: "e17",
    title: "Home supllies",
    amount: 15,
    date: new Date(2021, 1, 3),
  },
  {
    id: "e18",
    title: "Canon battery",
    amount: 80,
    date: new Date(2021, 1, 7),
  },
  {
    id: "e19",
    title: "Home supllies",
    amount: 150,
    date: new Date(2021, 2, 9),
  },
  {
    id: "e20",
    title: "Tinex",
    amount: 59,
    date: new Date(2021, 2, 14),
  },
  {
    id: "e21",
    title: "Udemy course",
    amount: 90,
    date: new Date(2021, 2, 24),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // adding a new item to the DUMMY array
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // Data recieved bottom to up from ExpenseForm --> NewExpense --> App
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
