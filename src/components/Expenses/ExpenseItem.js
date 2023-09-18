//* React component is a javascript function *//
import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (_props) => {

    console.log("Expense Item evaluated by React")

    const [title, setTitle] = useState(_props.expense.title);

    return (
        <Card className="expense-item">
            <ExpenseDate date={_props.expense.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <Card className="expense-item__price">${_props.expense.amount}</Card>
            </div>
        </Card>
    );
}

export default ExpenseItem;
