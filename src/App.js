import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Joystick",
    amount: 124.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Earphones",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Car",
    amount: 7500,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Notebook",
    amount: 950,
    date: new Date(2022, 2, 10),
  },
  {
    id: "e6",
    title: "Playstation 5",
    amount: 650,
    date: new Date(2022, 7, 3),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
