import React, { useState } from "react";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (_props) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <div>
                <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />
            </div>
            <div>
                <ExpenseItem expense={_props.expenses[0]}></ExpenseItem>
                <ExpenseItem expense={_props.expenses[1]}></ExpenseItem>
                <ExpenseItem expense={_props.expenses[2]}></ExpenseItem>
                <ExpenseItem expense={_props.expenses[3]}></ExpenseItem>
            </div>
        </div>
    )
}

export default Expenses;