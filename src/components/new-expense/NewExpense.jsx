import React from "react";
import { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import Button from "../UI/Button/Button";
import "./NewExpense.css";

const NewExpense = ({ onAddNewExpenseHandler }) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onAddNewExpenseHandler={onAddNewExpenseHandler}
        />
      ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />
      )}
    </div>
  );
};

export default NewExpense;
