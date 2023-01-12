import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, date, price }) => {
  return (
    <div className="expense-items">
      <div className="expense-date">{date.toString()}</div>
      <h2 className="title">{title}</h2>
      <div className="item">
        <span className="price">{price} сом </span>
      </div>
    </div>
  );
};

export default ExpenseItem;
