import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import categories from "./categories";

const ExpenseTrackerApp = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 40, category: "Utilities" },
    { id: 2, description: "bbb", amount: 80, category: "Groceries" },
    { id: 3, description: "ccc", amount: 25, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 40, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-10">
        <ExpenseForm
          onSubmit={(expense) => {
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
          }}
        />
      </div>
      <div className="mb-10">
        <ExpenseFilter
          onSelectCategory={(value) => setSelectedCategory(value)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((item) => item.id !== id))
        }
      />
    </div>
  );
};

export default ExpenseTrackerApp;
