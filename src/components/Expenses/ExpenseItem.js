//* React component is a javascript function *//
import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (_props) => {

    const clickHandler = () => {
        console.log("Clicked!")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={_props.expense.date}/>
            <div className="expense-item__description">
                <h2>{_props.expense.title}</h2>
                <Card className="expense-item__price">${_props.expense.amount}</Card>
            </div>
            <button className="btn btn-secondary" onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
