import React from "react";
import Card from "../UI/Card";
import "./ExpenseDate.css";

const ExpenseDate = (_props) => {
    const month = _props.date.toLocaleString("en-US", {month: "long"});
    const day = _props.date.toLocaleString("en-US", {day: "2-digit"});
    const year = _props.date.getFullYear();

    return (
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </Card>
    );
}

export default ExpenseDate;
