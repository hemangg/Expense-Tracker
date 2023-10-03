import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Table", amount: 200, category: "Furniture" },
    { id: 2, description: "Chair", amount: 80, category: "Furniture" },
    { id: 3, description: "Mattress", amount: 80, category: "Furniture" },
    { id: 4, description: "Cot", amount: 90, category: "Furniture" },
    { id: 5, description: "Laptop", amount: 800, category: "Electronics" },
    { id: 6, description: "Keyboard", amount: 110, category: "Electronics" },
    { id: 7, description: "Mouse", amount: 15, category: "Electronics" },
    { id: 8, description: "Monitor", amount: 120, category: "Electronics" },
    { id: 9, description: "iPhone", amount: 1099, category: "Gadgets" },
    { id: 10, description: "Watch", amount: 349, category: "Gadgets" },
    { id: 11, description: "AirPods", amount: 249, category: "Gadgets" },
  ]);
  if (expenses.length === 0) return null;
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
