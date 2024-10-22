import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [changeCategory, setChangeCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Electronics" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Electronics" },
    { id: 4, description: "ddd", amount: 10, category: "Electronics" },
    { id: 5, description: "eee", amount: 10, category: "Electronics" },
  ]);

  const visibleExpenses = changeCategory
    ? expenses.filter((e) => e.category === changeCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setChangeCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
