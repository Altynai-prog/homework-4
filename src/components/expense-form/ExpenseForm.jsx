import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import FormInput from "../UI/FormInput/FormInput";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(null);

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };
  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(event.target.value);
    }
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const saveHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      price,
      date,
    };
    props.onAddNewExpenseHandler(expenseData);
  };
  return (
    <form>
      <div className="expense-form-input">
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите ..."
          value={title}
          onChange={titleInputChangeHandler}
        />
        <FormInput
          id="price"
          labelName="Цена"
          inputType="number"
          placeholder="Введите ..."
          value={price}
          onChange={priceInputChangeHandler}
        />
        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
          value={date}
          onChange={dateInputChangeHandler}
        />
      </div>

      <div className="button">
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Сохранить" onClick={saveHandler} />
      </div>
    </form>
  );
};

export default ExpenseForm;
