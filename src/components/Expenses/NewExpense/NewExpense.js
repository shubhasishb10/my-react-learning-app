import React from "react";

import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import Card from "../../UI/Card";

const NewExpense = (_props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(10)
        }
        _props.onAddExpense(expenseData);
    }

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </Card>
    )
}

export default NewExpense;