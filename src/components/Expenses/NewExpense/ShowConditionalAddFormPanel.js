import React, {useState} from "react";
import './ShowConditionalAddFormPanel.css'
import NewExpense from "./NewExpense";
import ExpenseForm from "./ExpenseForm";
import Card from "../../UI/Card";

const ShowConditionalAddFormPanel = (_props) => {

    const [isShowFormEnabled, setShowFormEnabled] = useState(false)

    const expenseAddHandler = (expense) => {
        _props.onExpenseAdd(expense)
        toggleVisibility()
    }

    const toggleVisibility = () => {
        setShowFormEnabled(preValue => !preValue)
    }

    return (
        isShowFormEnabled ? <NewExpense onCancelButtonClick={toggleVisibility} onAddExpense={expenseAddHandler}/> :
            <Card className="new-expense">
                <button onClick={toggleVisibility}>Add Expense</button>
            </Card>
    )
}

export default ShowConditionalAddFormPanel;