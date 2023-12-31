import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (_props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = ($event) => {
        setEnteredTitle($event.target.value);
    }
    const amountChangeHandler = ($event) => {
        setEnteredAmount($event.target.value);
    }
    const dateChangeHandler = ($event) => {
        setEnteredDate($event.target.value);
    }

    const cancelButtonClickHandler = () => {
        _props.onCancelButtonClick()
    }

    const submitHandler = $event => {
        $event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        _props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

    }

    /*const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });*/

    /*const titleChangeHandler = ($event) => {
        setUserInput({
                ...userInput,
                enteredTitle: $event.target.value
            }
        )
    }
    const amountChangeHandler = ($event) => {
        setUserInput({
                ...userInput,
                enteredAmount: $event.target.value
            }
        )
    }
    const dateChangeHandler = ($event) => {
        setUserInput({
                ...userInput,
                enteredDate: $event.target.value
            }
        )
    }*/

    /*const titleChangeHandler = ($event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: $event.target.value};
        })
    }
    const amountChangeHandler = ($event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: $event.target.value};
        })
    }
    const dateChangeHandler = ($event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: $event.target.value};
        })
    }*/

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" value={enteredDate} max="2024-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button className="btn btn-secondary" onClick={cancelButtonClickHandler} type="button">Cancel</button>
            </div>
            <div className="new-expense__actions">
                <button className="btn btn-secondary" type="submit">Add Expense</button>
            </div>
        </div>
    </form>)
}

export default ExpenseForm;