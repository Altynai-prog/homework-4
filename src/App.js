import "./App.css";
import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";


function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Toilet Paper",
      price: 94,
      date: new Date(),
    },
    {
      title: "Car Insurance",
      price: 294,
      date: new Date(),
    },
  ])
  const addNewExpenseHandler = (data) => {
   const updatedExpenses = [...expenses]
   updatedExpenses.push(data)
    setExpenses(updatedExpenses)
  }

  return (
    <div className="App">
      <NewExpense onAddNewExpenseHandler = {addNewExpenseHandler}/>

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
