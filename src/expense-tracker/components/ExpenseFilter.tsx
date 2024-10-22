import React from "react";

interface Props {
  onSelect: (category: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select
      className="form-select w-50"
      onChange={(event) => onSelect(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utlilities </option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
