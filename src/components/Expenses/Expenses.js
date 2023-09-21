import React, {useState} from "react";

import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (_props) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = _props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    return (<div>
        <div>
            <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler}/>
        </div>
        <ExpensesList filteredExpenses={filteredExpenses} />
    </div>)
}

export default Expenses;